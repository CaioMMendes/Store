import { OptionalIdUserCart } from "@/providers/cart-provider";

export const NumberOfProducts = (products: OptionalIdUserCart[]) => {
  if (!products) {
    return;
  }
  return products.reduce((total, product) => total + product.quantity, 0);
};
