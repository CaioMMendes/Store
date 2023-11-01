import DropDownCatalog from "@/components/dropdown-catalog";
import ProductItem from "@/components/productItem";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import { prismaClient } from "@/lib/prisma";
import DropdownOrderBy from "./components/dropdown-orderby";

const CategoryProductsPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className="items-cente flex justify-between">
        <DropDownCatalog catalog={categories} category={params.slug} />
        <DropdownOrderBy />
      </div>
      <div className="grid !w-full !max-w-6xl grid-cols-2 gap-x-2 gap-y-3">
        {products.map((product) => {
          return (
            <ProductItem
              product={computeProductTotalPrice(product)}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
