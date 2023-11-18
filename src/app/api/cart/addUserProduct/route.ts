import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, productId, quantity } = await request.json();
  if (!userId || !productId || !quantity) {
    return new NextResponse(
      JSON.stringify({ message: "Ocorreu um erro", status: "erro" }),
      {
        status: 403,
      },
    );
  }
  const product = await prismaClient.userCart.findFirst({
    where: {
      userId,
      productId,
    },
  });
  if (product) {
    await prismaClient.userCart.updateMany({
      where: {
        userId,
        productId,
      },
      data: {
        quantity: product.quantity + quantity,
      },
    });
  } else {
    await prismaClient.userCart.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });
  }
  return new NextResponse(
    JSON.stringify({
      message: "Produto adicionado com sucesso!",
      status: "success",
    }),
    { status: 200 },
  );
}
