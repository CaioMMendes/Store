"use client";
import ProductItem from "@/components/productItem";
import SearchProduct from "@/components/search-product";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import SearchProductRequest from "@/requests/search-product-request";
import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import LoadingSearchProduct from "./components/loading-search-products";

const SearchProductPage = () => {
  const searchParams = useSearchParams();
  const {
    data: productsData,
    isError: productsIsError,
    isLoading: productsIsLoading,
  } = useQuery({
    queryKey: [`getProducts${searchParams.get("product")}`],

    queryFn: async () =>
      await SearchProductRequest(searchParams.get("product")),
  });
  if (productsIsError) {
    alert(
      "Ocorreu um erro ao fazer a requisição! tente novamente em alguns instantes",
    );
  }
  if (productsIsLoading) {
    return <LoadingSearchProduct />;
  }
  if (!productsData || productsData.length === 0) {
    return (
      <div className="mt-3 flex h-full flex-col gap-3">
        <SearchProduct />
        <div className="flex h-full w-full  justify-center p-5 text-justify text-xl">
          <p>
            {" "}
            Não foi possível encontrar nenhum produto relacionado a{" "}
            <span className="font-semibold">{searchParams.get("product")}</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <SearchProduct />
      <div className="grid !w-full !max-w-6xl grid-cols-2 gap-x-2 gap-y-3">
        {productsData.map((product: Product) => {
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

export default SearchProductPage;
