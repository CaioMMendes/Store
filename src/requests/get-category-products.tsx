import { OrderByProps } from "@/providers/order-by-provider";

const GetCategoryProductsRequest = async (
  slug: string,
  orderBy: OrderByProps,
) => {
  const response = await fetch(`/api/product/category?slug=${slug}`, {
    method: "POST",
    body: Buffer.from(JSON.stringify(orderBy)),
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  }
};

export default GetCategoryProductsRequest;
