"use server";

import { prismaClient } from "@/lib/prisma";
import { OptionalIdUserCart } from "@/providers/cart-provider";

export const createOrder = async (
  cartProducts: OptionalIdUserCart[],
  userId: string,
) => {
  try {
    const order = await prismaClient.userOrder.create({
      data: {
        userId: userId,
        status: "WAITING_FOR_PAYMENT",
        userProducts: {
          createMany: {
            data: cartProducts.map((product) => {
              return {
                productId: product.productId,
                userId: userId,
                totalPaid: Number(
                  (
                    Number(product.product.basePrice) *
                    (1 - product.product.discountPercentage / 100)
                  ).toFixed(2),
                ),
                quantity: product.quantity,
              };
            }),
          },
        },
      },
    });
    await prismaClient.userCart.deleteMany({
      where: {
        userId,
      },
    });
    return order;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
