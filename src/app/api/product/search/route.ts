import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let product = searchParams.get("product");
  let productModified;

  if (searchParams.get("product")) {
    product = decodeURIComponent(searchParams.get("product")!);
    product = product.trim();
    productModified = product;
  }
  const products = await prismaClient.product.findMany({
    where: {
      OR: [
        {
          description: {
            contains: productModified,
            mode: "insensitive",
          },
        },
        { name: { contains: productModified, mode: "insensitive" } },
        { slug: { contains: productModified, mode: "insensitive" } },
        {
          category: {
            OR: [
              {
                slug: { contains: productModified, mode: "insensitive" },
              },
              {
                name: { contains: productModified, mode: "insensitive" },
              },
            ],
          },
        },
      ],
    },
    orderBy: {
      discountPercentage: "desc",
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              OR: [
                {
                  slug: {
                    contains: productModified,
                    mode: "insensitive",
                  },
                },
                { name: { contains: productModified, mode: "insensitive" } },
              ],
            },
            orderBy: {
              discountPercentage: "desc",
            },
          },
        },
      },
    },
  });

  return new NextResponse(JSON.stringify(products), { status: 200 });
}
