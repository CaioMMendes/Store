import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body) {
    return new NextResponse(JSON.stringify({ message: "Ocorreu um erro" }), {
      status: 403,
    });
  }
  const products = await prismaClient.userCart.findMany({
    where: {
      userId: body.userId,
    },
    include: {
      product: true,
    },
  });
  return new NextResponse(JSON.stringify(products), { status: 200 });
}
