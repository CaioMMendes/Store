import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient(); /* .$extends({
    result:{
      product:{
        totalPrice:{
          needs:{basePrice:true,discountPercentage:true},
          compute(product){
            return product.basePrice-(product.discountPercentage)
          }
        }
      }
    }
  }); */
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}
export const prismaClient = prisma;
