import { Product } from "@prisma/client";

interface ProductTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  } else if (product.discountPercentage !== 0) {
    const totalPrice =
      (product.discountPercentage / 100) * Number(product.basePrice);
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
