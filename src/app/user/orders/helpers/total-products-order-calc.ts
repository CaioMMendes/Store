import { UserProductWithProduct } from "../page";

export const TotalProductsOrderCalc = (
  userProducts: UserProductWithProduct[],
) => {
  return userProducts.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
};
