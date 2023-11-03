import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  } else if (product.discountPercentage !== 0) {
    const totalPrice =
      (1 - product.discountPercentage / 100) * Number(product.basePrice);
    return {
      ...product,
      totalPrice,
    };
  } else {
    return {
      ...product,
      totalPrice: 100000000,
    };
  }
};
