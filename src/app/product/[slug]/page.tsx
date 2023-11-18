"use client";
import ProductList from "@/components/lists/product-list";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import ProductItemRequest from "@/requests/product-item";
import { useEffect } from "react";
import { useQuery } from "react-query";
import LoadingProductImages from "./components/loading-product-images";
import ProductDetails from "./components/product-details";
import ProductImages from "./components/product-images";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isError, isLoading } = useQuery({
    queryKey: [`getProductItem${params.slug}`, params.slug],

    queryFn: async () => await ProductItemRequest(params.slug),
  });

  if (isError) {
    alert(
      "Ocorreu um erro ao fazer a requisição! tente novamente em alguns instantes",
    );
  }
  if (isLoading) {
    return <LoadingProductImages />;
  }

  if (!data) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-5 ">
        <p className="flex w-full flex-wrap justify-center text-center text-xl">
          O produto &nbsp;<span className="font-semibold">{params.slug}</span>
          não pode ser encontrado
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4 pb-5">
      <div className="w-100vw flex flex-col gap-4  ">
        <ProductImages imageUrls={data.imageURLs} name={data.name} />

        <div className="flex flex-col gap-4 p-5 ">
          <ProductDetails product={computeProductTotalPrice(data)} />
        </div>
      </div>
      <div className="px-5">
        <ProductList
          products={data.category.products}
          title={"Produtos recomendados"}
          slug={data.category.slug}
        />
      </div>
    </div>
  );
};
export default ProductDetailPage;
