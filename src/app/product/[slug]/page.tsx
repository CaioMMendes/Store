"use client";
import ProductItemRequest from "@/requests/product-item";
import { useQuery } from "react-query";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getProductItem"],
    queryFn: async () => await ProductItemRequest(params.slug),
  });

  if (isError) {
    alert(
      "Ocorreu um erro ao fazer a requisição! tente novamente em alguns instantes",
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
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
  return <div>{data.name}</div>;
};
export default ProductDetailPage;
