"use client";
import ProductItem from "@/components/productItem";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import { Product } from "@prisma/client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
  title: string;
  slug: string;
}

const ProductList = ({ products, title, slug }: ProductListProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free",
    slides: {
      perView: "auto",
      spacing: 12,
    },
  });
  return (
    <div className="flex  flex-col gap-3">
      <Link href={`/category/${slug}`} className="w-fit">
        <h2 className="w-fit text-base font-bold uppercase">{title}</h2>
      </Link>
      <div
        ref={ref}
        className="flex w-full  overflow-x-auto  [&::-webkit-scrollbar]:hidden"
        //colocar um numero de colunas para que seja iguais as do slider
      >
        {products.map((product) => {
          return (
            <div className="keen-slider__slide select-none " key={product.id}>
              <div className="max-w-40  w-40">
                <ProductItem product={computeProductTotalPrice(product)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
