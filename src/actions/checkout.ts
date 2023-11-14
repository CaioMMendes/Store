"use server";

import { OptionalIdUserCart } from "@/providers/cart-provider";
import Stripe from "stripe";

export const createCheckout = async (products: OptionalIdUserCart[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: `${process.env.HOST_URL}/cart`,
    line_items: products.map((product) => {
      const totalPrice = (
        Number(product.product.basePrice) *
        (1 - product.product.discountPercentage / 100)
      ).toFixed(2);
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.product.name,
            description: product.product.description,
            images: product.product.imageURLs,
          },
          unit_amount: Number(totalPrice) * 100,
        },
        quantity: product.quantity,
      };
    }),
  });
  return checkout;
};
