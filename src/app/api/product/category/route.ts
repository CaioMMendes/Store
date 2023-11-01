import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return;
  }
  const products =
    slug === "deals"
      ? await prismaClient.product.findMany({
          where: {
            discountPercentage: {
              gt: 0,
            },
          },
          orderBy: {
            discountPercentage: "desc",
          },
        })
      : await prismaClient.product.findMany({
          where: {
            category: {
              slug: slug,
            },
          },
        });

  return new NextResponse(JSON.stringify(products), { status: 200 });
}
