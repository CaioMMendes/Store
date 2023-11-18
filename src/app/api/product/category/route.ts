import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const { type, lowestBiggest } = await request.json();

  const slug = searchParams.get("slug");
  if (!slug) {
    return;
  }
  let products;
  if (slug === "deals") {
    if (type === "discountPercentage") {
      products =
        await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Product"."discountPercentage">0  order by "Product"."discountPercentage" desc`;
    } else if (type === "price" && lowestBiggest === "desc") {
      products =
        await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Product"."discountPercentage">0  order by "price" desc`;
    } else if (type === "price" && lowestBiggest === "asc") {
      products =
        await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Product"."discountPercentage">0  order by "price" asc`;
    }
  } else if (type === "discountPercentage") {
    products =
      await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Category"."slug"=${slug}  order by "Product"."discountPercentage" desc`;
  } else if (lowestBiggest === "desc" && type === "price") {
    products =
      await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Category"."slug"=${slug}  order by "price" desc`;
  } else if (lowestBiggest === "asc" && type === "price") {
    products =
      await prismaClient.$queryRaw`select "Product".*,("basePrice"-("discountPercentage"*"basePrice"/100))
      as "price" from "Category" inner join "Product"  
      on "Category"."id"="Product"."categoryId" where "Category"."slug"=${slug}  order by "price" asc`;
  }

  return new NextResponse(JSON.stringify(products), { status: 200 });
}
