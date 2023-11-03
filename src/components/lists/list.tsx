import { prismaClient } from "@/lib/prisma";
import ProductList from "./product-list";

const List = async ({ product }: { product: string }) => {
  const translate = {
    keyboards: "teclados",
    mouses: "mouses",
    headphones: "Fones",
    monitors: "Monitores",
    speakers: "SPEAKERS",
    mousepads: "mousepads",
  };
  const translatedProduct = translate[product as keyof typeof translate];
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: product,
      },
    },
    orderBy: {
      discountPercentage: "desc",
    },
  });

  return (
    <div>
      <ProductList
        products={products}
        title={translatedProduct}
        slug={product}
      />
    </div>
  );
};

export default List;
