"use client";
import { ProductWithTotalPrice } from "@/helpers/productPrice";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import { TrashIcon } from "lucide-react";
import cartProducts from "@/providers/cart-provider";
import { UserCart } from "@prisma/client";
import DeleteProductCart from "@/requests/delete-product-cart";
import { useDebounce } from "@/helpers/use-debounce";
import UpdateCartProductQuantity from "@/requests/update-cart-product-quantity";
import Link from "next/link";
import { SheetClose } from "../../../components/ui/sheet";
import { usePathname } from "next/navigation";

interface CartUserProduct {
  cartProductId: string | undefined;
}
interface HandleQuantityProps {
  status: string;
  cartProductId: string | undefined;
  quantity: number;
}
interface ReponseType {
  message?: string;
  status?: string;
}

interface CartProductItemProps {
  cartProductId: string | undefined;
  status: "authenticated" | "loading" | "unauthenticated";
  product: ProductWithTotalPrice;
  quantity: number;
}
const CartProductItem = ({
  cartProductId,
  status,
  product,
  quantity,
}: CartProductItemProps) => {
  const updateQuantity = cartProducts((state) => state.updateQuantity);
  const deleteProduct = cartProducts((state) => state.deleteProduct);
  const debounceQuantity = useDebounce(quantity);
  const firstUpdate = useRef(true);
  const [render, setRender] = useState(false);
  const pathname = usePathname();
  const pathnameSelected = pathname.split("/")[1];

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (render === false) {
      return;
    }
    console.log(cartProductId);
    if (cartProductId !== undefined) {
      setRender(false);
      cartProductId && UpdateCartProductQuantity({ cartProductId, quantity });
    }
  }, [debounceQuantity]); // eslint-disable-line
  const handleQuantity = ({
    status,
    cartProductId,
    quantity,
  }: HandleQuantityProps) => {
    if (cartProductId === undefined) {
      return;
    }
    setRender(true);
    if (status === "aumentar") {
      return updateQuantity(cartProductId, quantity + 1);
    } else if (status === "diminuir") {
      return quantity > 1 && updateQuantity(cartProductId, quantity - 1);
    }
  };
  const handleDeleteCartItem = ({ cartProductId }: CartUserProduct) => {
    if (!cartProductId) {
      return alert("voce está deslogado");
    }

    DeleteProductCart({ cartProductId });
    deleteProduct(cartProductId);
  };

  return (
    <div className="flex h-full w-full items-center justify-between gap-2">
      {pathnameSelected !== "cart" ? (
        <SheetClose asChild>
          <Link href={`/product/${product.slug}`} className="h-full">
            <div className="flex h-full w-28 items-center justify-center rounded-lg bg-accent">
              <Image
                src={product.imageURLs[0]}
                alt={product.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[75%] w-auto max-w-[90%]"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>
        </SheetClose>
      ) : (
        <Link
          href={`/product/${product.slug}`}
          className="flex h-full min-h-[8.75rem] items-center justify-center"
        >
          <div className="flex h-full min-h-[8.75rem] w-28 items-center justify-center rounded-lg bg-accent">
            <Image
              src={product.imageURLs[0]}
              alt={product.name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[75%] w-auto max-w-[90%]"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Link>
      )}
      <div className="flex flex-1 items-center justify-between gap-2">
        <div className="flex flex-col gap-2">
          <p>{product.name}</p>
          <div className="flex  flex-wrap gap-2">
            <p className="flex gap-1 text-base font-bold">
              R$ {Number(product.totalPrice).toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className={` flex text-sm line-through opacity-75 `}>
                {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={"outline"}
              className="h-3 w-3"
              onClick={() =>
                handleQuantity({
                  status: "diminuir",
                  cartProductId,
                  quantity: quantity,
                })
              }
            >
              <p>{"<"}</p>
            </Button>
            <p className="flex w-6 items-center justify-center">{quantity}</p>
            <Button
              variant={"outline"}
              className="h-3 w-3"
              onClick={() =>
                handleQuantity({
                  status: "aumentar",
                  cartProductId,
                  quantity: quantity,
                })
              }
            >
              <p>{">"}</p>
            </Button>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="px-2"
          onClick={() =>
            handleDeleteCartItem({
              cartProductId,
            })
          }
        >
          <TrashIcon width={30} />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;
