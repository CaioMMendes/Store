"use client";
import DropDownCatalog from "@/components/dropdown-catalog";
import ProductItem from "@/components/productItem";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import orderBy from "@/providers/order-by-provider";
import GetAllCategoriesRequest from "@/requests/get-all-categories";
import GetCategoryProductsRequest from "@/requests/get-category-products";
import { Product } from "@prisma/client";
import { useQuery } from "react-query";
import LoadingCategoryProducts from "./components/loading-category-products";
import DropdownOrderBy from "./components/select-orderby";

const CategoryProductsPage = ({ params }: { params: { slug: string } }) => {
  const orderByZustand = orderBy((state) => state.orderBy);

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
    queryKey: [`getAllProductsCategory${params.slug}`, orderByZustand],
    queryFn: async () =>
      await GetCategoryProductsRequest(params.slug, orderByZustand),
  });

  if (categoriesIsError || productsCategoryIsError) {
    alert(
      "Ocorreu um erro ao fazer a requisição! tente novamente em alguns instantes",
    );
  }
  if (productsCategoryIsLoading || categoriesIsLoading) {
    return <LoadingCategoryProducts />;
  }

  if (!productsCategoryData) {
    return (
      <div className="flex items-center justify-center p-3 text-justify text-xl">
        Não foi possível encontrar nenhum produto
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div className="items-cente flex justify-between">
        <DropDownCatalog catalog={categoriesData} category={params.slug} />
        <div className="flex  items-center justify-between gap-1">
          <p className="flex w-fit text-sm">Ordenar:</p>
          <DropdownOrderBy />
        </div>
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
