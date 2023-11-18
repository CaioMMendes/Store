import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  console.log("first");
  const { orderId } = await request.json();
  if (!orderId) {
    return new NextResponse(JSON.stringify({ message: "Ocorreu um erro" }), {
      status: 403,
    });
  }
  await prismaClient.userProduct.deleteMany({
    where: {
      orderId: orderId,
    },
  });
  await prismaClient.userOrder.delete({
    where: {
      id: orderId,
    },
  });
  return new NextResponse(
    JSON.stringify({ message: "Pedido cancelado com sucesso!" }),
    { status: 200 },
  );
}
