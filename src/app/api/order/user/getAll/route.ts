import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = await request.json();
  if (!userId) {
    return new NextResponse(JSON.stringify({ message: "Ocorreu um erro" }), {
      status: 403,
    });
  }
  const orders = await prismaClient.userOrder.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      updatedAt: "desc",
    },

    include: {
      userProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return new NextResponse(JSON.stringify(orders), { status: 200 });
}
