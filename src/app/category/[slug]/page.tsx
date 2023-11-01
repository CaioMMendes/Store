"use client";
import DropDownCatalog from "@/components/dropdown-catalog";
import ProductItem from "@/components/productItem";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import { prismaClient } from "@/lib/prisma";
import DropdownOrderBy from "./components/dropdown-orderby";
import { useQuery } from "react-query";
import ProductItemRequest from "@/requests/product-item";
import GetAllCategoriesRequest from "@/requests/get-all-categories";
import { Product } from "@prisma/client";
import GetCategoryProductsRequest from "@/requests/get-category-products";

const CategoryProductsPage = ({ params }: { params: { slug: string } }) => {
  const {
    data: categoriesData,
    isError: categoriesIsError,
    isLoading: categoriesIsLoading,
  } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: async () => await GetAllCategoriesRequest(),
  });
  const {
    data: productsCategoryData,
    isError: productsCategoryIsError,
    isLoading: productsCategoryIsLoading,
  } = useQuery({
    queryKey: ["getAllProductsCategory"],
    queryFn: async () => await GetCategoryProductsRequest(params.slug),
  });

  if (categoriesIsError || productsCategoryIsError) {
    alert(
      "Ocorreu um erro ao fazer a requisição! tente novamente em alguns instantes",
    );
  }
  if (productsCategoryIsLoading) {
    return <div>Loading...</div>;
  }
  // const products =
  //   params.slug === "deals"
  //     ? await prismaClient.product.findMany({
  //         where: {
  //           discountPercentage: {
  //             gt: 0,
  //           },
  //         },
  //         orderBy: {
  //           discountPercentage: "desc",
  //         },
  //       })
  //     : await prismaClient.product.findMany({
  //         where: {
  //           category: {
  //             slug: params.slug,
  //           },
  //         },
  //       });
  // const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className="items-cente flex justify-between">
        <DropDownCatalog catalog={categoriesData} category={params.slug} />
        <DropdownOrderBy />
      </div>
      <div className="grid !w-full !max-w-6xl grid-cols-2 gap-x-2 gap-y-3">
        {productsCategoryData.map((product: Product) => {
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
