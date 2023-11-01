import { ProductWithTotalPrice } from "@/helpers/productPrice";
import { Product } from "@prisma/client";
import { ArrowDown, ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className=" flex cursor-pointer flex-col gap-4">
      <div className="relative flex h-40  flex-col items-center justify-center rounded-lg bg-accent ">
        {product.discountPercentage > 0 && (
          <div className="absolute left-2.5 top-2.5 flex items-center justify-start rounded-full bg-primary px-1.5">
            <ArrowDown width={17} height={24} />
            <p>{product.discountPercentage}%</p>
          </div>
        )}
        <Image
          src={product.imageURLs[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[75%] w-auto max-w-[90%] flex-1"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex flex-col">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap ">
          {product.name}
        </p>
        <div className="flex items-center justify-start gap-2 ">
          <p className="text-sm font-semibold">
            R$ {product.totalPrice.toFixed(2)}
          </p>
          {product.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-75">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
