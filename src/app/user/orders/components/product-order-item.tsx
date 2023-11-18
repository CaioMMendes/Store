import Image from "next/image";
import Link from "next/link";
import { UserProductWithProduct } from "../page";

const ProductOrderItem = ({ product }: { product: UserProductWithProduct }) => {
  return (
    <Link href={`/product/${product.product.slug}`} scroll={true}>
      <div className=" flex w-full  cursor-pointer gap-4">
        <div className="relative flex h-32 w-[45%] flex-col items-center justify-center rounded-lg bg-accent ">
          <Image
            src={product.product.imageURLs[0]}
            alt={product.product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[75%] w-auto max-w-[90%] flex-1"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex  w-[55%] flex-col justify-between">
          <p className="flex-wrap overflow-hidden text-ellipsis text-lg  ">
            {product.product.name}
          </p>
          <div className="flex items-center justify-between gap-2 ">
            <p className="text-base font-semibold">
              R$ {Number(product.totalPaid).toFixed(2)}
            </p>
            <p className="opacity-80">Qtd: {product.quantity}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductOrderItem;
