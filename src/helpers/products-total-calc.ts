import { OptionalIdUserCart } from "@/providers/cart-provider";

export function productsTotalCalc(products: OptionalIdUserCart[]) {
  if (!products) {
    return;
  }
  return products.reduce(
    (total, product) =>
      total +
      Number(product.product.basePrice) *
        (1 - product.product.discountPercentage / 100) *
        product.quantity,
    0,
  );
}
