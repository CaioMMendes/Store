"use client";
import { ProductWithTotalPrice } from "@/helpers/productPrice";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import cartProducts from "@/providers/cart-provider";

const CartProductItem = ({
  product,
  quantity,
}: {
  product: ProductWithTotalPrice;
  quantity: number;
}) => {
  const updateQuantity = cartProducts((state) => state.updateQuantity);
  const productsZustand = cartProducts((state) => state.products);
  const handleQuantity = ({
    status,
    productId,
    quantity,
  }: {
    status: string;
    productId: string;
    quantity: number;
  }) => {
    if (status === "aumentar") {
      console.log(productId, quantity + 1);
      return updateQuantity(productId, quantity + 1);
    } else if (status === "diminuir") {
      return quantity > 1 && updateQuantity(productId, quantity - 1);
    }
  };
  const handleDeleteCartItem = () => {
    console.log("delete");
  };

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="flex w-24 items-center justify-center rounded-lg bg-accent">
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
      <div className="flex flex-1 items-center gap-2">
        <div className="flex flex-col gap-2">
          <p>{product.name}</p>
          <div className="flex  gap-2">
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
              onClick={() =>
                handleQuantity({
                  status: "diminuir",
                  productId: product.id,
                  quantity: quantity,
                })
              }
            >
              <p>{"<"}</p>
            </Button>
            <p className="flex w-10 items-center justify-center text-lg">
              {quantity}
            </p>
            <Button
              variant={"outline"}
              onClick={() =>
                handleQuantity({
                  status: "aumentar",
                  productId: product.id,
                  quantity: quantity,
                })
              }
            >
              <p className="text-lg">{">"}</p>
            </Button>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="px-2"
          onClick={handleDeleteCartItem}
        >
          <TrashIcon width={30} />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;
