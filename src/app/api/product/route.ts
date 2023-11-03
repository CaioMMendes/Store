import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get("slug");
  if (!slug) {
    return;
  }
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
            orderBy: {
              discountPercentage: "desc",
            },
          },
        },
      },
    },
  });
  return new NextResponse(JSON.stringify(product), { status: 200 });
}
