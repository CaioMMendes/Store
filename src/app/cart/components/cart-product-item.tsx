"use client";
import { StorageProductProps } from "@/app/product/[slug]/components/product-details";
import { ProductWithTotalPrice } from "@/helpers/productPrice";
import { useDebounce } from "@/helpers/use-debounce";
import cartProducts from "@/providers/cart-provider";
import DeleteProductCart from "@/requests/delete-product-cart";
import UpdateCartProductQuantity from "@/requests/update-cart-product-quantity";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../../components/ui/button";
import { SheetClose } from "../../../components/ui/sheet";

interface CartUserProduct {
  cartProductId: string | undefined;
}
interface HandleQuantityProps {
  status: "unauthenticated" | "authenticated" | "loading";
  product: ProductWithTotalPrice;
  cartProductId: string | undefined;
  quantity: number;
  increaseDecrease: "increase" | "decrease";
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
    increaseDecrease,
    product,
  }: HandleQuantityProps) => {
    if (status === "unauthenticated") {
      const productsLocalStorage = JSON.parse(
        localStorage.getItem("cart-products") || "[]",
      );
      if (increaseDecrease === "increase") {
        const updatedQuantityProductStorage = productsLocalStorage.map(
          (productStorage: StorageProductProps) => {
            if (productStorage.productId === product.id) {
              return {
                ...productStorage,
                quantity: productStorage.quantity + 1,
              };
            }
            return productStorage;
          },
        );
        localStorage.setItem(
          "cart-products",
          JSON.stringify(updatedQuantityProductStorage),
        );

        return updateQuantity(product.id, quantity + 1, status);
      } else if (increaseDecrease === "decrease") {
        const updatedQuantityProductStorage = productsLocalStorage.map(
          (productStorage: StorageProductProps) => {
            if (productStorage.productId === product.id) {
              return {
                ...productStorage,
                quantity:
                  productStorage.quantity > 1
                    ? productStorage.quantity - 1
                    : productStorage.quantity,
              };
            }
            return productStorage;
          },
        );
        localStorage.setItem(
          "cart-products",
          JSON.stringify(updatedQuantityProductStorage),
        );
        return quantity > 1 && updateQuantity(product.id, quantity - 1, status);
      }
    }

    if (cartProductId === undefined) {
      return;
    }
    setRender(true);
    if (increaseDecrease === "increase") {
      return updateQuantity(cartProductId, quantity + 1, status);
    } else if (increaseDecrease === "decrease") {
      return (
        quantity > 1 && updateQuantity(cartProductId, quantity - 1, status)
      );
    }
  };
  const handleDeleteCartItem = ({
    cartProductId,
    product,
  }: {
    cartProductId: string | undefined;
    product: ProductWithTotalPrice;
  }) => {
    if (status === "unauthenticated") {
      const productsLocalStorage = JSON.parse(
        localStorage.getItem("cart-products") || "[]",
      );
      const newProducts = productsLocalStorage.filter(
        (productStorage: StorageProductProps) =>
          product.id !== productStorage.productId,
      );
      deleteProduct(product.id, status);

      return localStorage.setItem("cart-products", JSON.stringify(newProducts));
    }
    if (!cartProductId) {
      return alert("voce está deslogado");
    } else {
      DeleteProductCart({ cartProductId });
      deleteProduct(cartProductId, status);
    }
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
                  increaseDecrease: "decrease",
                  cartProductId,
                  product,
                  quantity: quantity,
                  status,
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
                  increaseDecrease: "increase",
                  cartProductId,
                  product,
                  quantity: quantity,
                  status,
                })
              }
            >
              <p>{">"}</p>
            </Button>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="z-10 px-2"
          onClick={() =>
            handleDeleteCartItem({
              cartProductId,
              product,
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
