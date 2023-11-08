import { OptionalIdUserCart } from "@/providers/cart-provider";

export function productsSubtotalCalc(products: OptionalIdUserCart[]) {
  if (!products) {
    return;
  }
  return products.reduce(
    (total, product) =>
      total + Number(product.product.basePrice) * product.quantity,
    0,
  );
}
