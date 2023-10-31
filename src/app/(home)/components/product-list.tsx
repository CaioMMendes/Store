"use client";
import ProductItem from "@/components/productItem";
import { Product } from "@prisma/client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import { useEffect } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 2,
    },
  });
  return (
    <div
      ref={ref}
      className="flex w-full  overflow-x-auto [&::-webkit-scrollbar]:hidden"
      //colocar um numero de colunas para que seja iguais as do slider
    >
      {products.map((product) => {
        return (
          <div className="keen-slider__slide select-none" key={product.id}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
