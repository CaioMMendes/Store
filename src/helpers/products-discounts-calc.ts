import { OptionalIdUserCart } from "@/providers/cart-provider";

export function productsDiscountsCalc(products: OptionalIdUserCart[]) {
  if (!products) {
    return;
  }
  return products.reduce(
    (total, product) =>
      total +
      Number(product.product.basePrice) *
        (product.product.discountPercentage / 100) *
        product.quantity,
    0,
  );
}
