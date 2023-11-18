import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { cartProductId } = await request.json();
  if (!cartProductId) {
    return new NextResponse(JSON.stringify({ message: "Ocorreu um erro" }), {
      status: 403,
    });
  }
  await prismaClient.userCart.delete({
    where: {
      id: cartProductId,
    },
  });
  return new NextResponse(
    JSON.stringify({ message: "Produto deletado com sucesso!" }),
    { status: 200 },
  );
}
