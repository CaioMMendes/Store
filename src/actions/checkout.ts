"use server";

import {
  ProductWithTotalPrice,
  computeProductTotalPrice,
} from "@/helpers/productPrice";
import { OptionalIdUserCart } from "@/providers/cart-provider";
import { Product, UserCart } from "@prisma/client";
import Stripe from "stripe";

interface createCheckoutProductProps extends Omit<UserCart, "id" | "userId"> {
  id?: string | undefined;
  userId?: string;
  productId: string;
  quantity: number;
  product: ProductWithBasePriceNumber;
}

interface ProductWithBasePriceNumber extends Omit<Product, "basePrice"> {
  basePrice: number;
  totalPrice: number;
}

export const createCheckout = async (
  products: OptionalIdUserCart[] | createCheckoutProductProps[],
  orderId: string,
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const productWithTotalPrice = products.map((product) => {
    return {
      ...product,
      totalPrice: Number(
        (
          Number(product.product.basePrice) *
          (1 - product.product.discountPercentage / 100)
        ).toFixed(2),
      ),
    };
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.HOST_URL}/user/orders/`,
    cancel_url: `${process.env.HOST_URL}/user/orders/`,
    metadata: {
      orderId,
    },
    line_items: productWithTotalPrice.map((product) => {
      // const totalPrice = (
      //   Number(product.product.basePrice) *
      //   (1 - product.product.discountPercentage / 100)
      // ).toFixed(2);
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.product.name,
            description: product.product.description,
            images: product.product.imageURLs,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });
  console.log("saiu do checkout");
  return checkout;
};
