import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const categories = await prismaClient.category.findMany({});
  return new NextResponse(JSON.stringify(categories), { status: 200 });
}
