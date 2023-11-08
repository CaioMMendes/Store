import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const { cartProductId, quantity } = await request.json();
  if (!cartProductId) {
    return new NextResponse(JSON.stringify({ message: "Ocorreu um erro" }), {
      status: 403,
    });
  }
  const product = await prismaClient.userCart.update({
    where: {
      id: cartProductId,
    },
    data: {
      quantity,
    },
  });
  return new NextResponse(
    JSON.stringify({ message: "Quantidade atualizada com sucesso" }),
    { status: 200 },
  );
}
