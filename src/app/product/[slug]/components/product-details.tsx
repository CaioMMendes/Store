"use client";
import PercentageBadge from "@/components/percentage-badge";
import { Button } from "@/components/ui/button";

import ToastFunction from "@/components/toast-function";
import { useToast } from "@/components/ui/use-toast";
import { ProductWithTotalPrice } from "@/helpers/productPrice";
import cartProducts from "@/providers/cart-provider";
import AddProductToCart from "@/requests/add-product-to-cart";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductDescription from "./product-description";

export interface DataUser {
  id?: string | undefined;
  name?: string | undefined | null;
  image?: string | undefined | null;
  email?: string | undefined | null;
}

export interface HandleAddProductProps {
  product: ProductWithTotalPrice;
  userId?: string | undefined;
  quantity: number;
  status: "loading" | "authenticated" | "unauthenticated";
}

export interface StorageProductProps {
  product: ProductWithTotalPrice;
  quantity: number;
  productId: string;
}

const ProductDetails = ({ product }: { product: ProductWithTotalPrice }) => {
  const { data, status } = useSession();

  const dataUser = data as { user: DataUser };
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const router = useRouter();

  const addProduct = cartProducts((state) => state.addProduct);
  const productsZustand = cartProducts((state) => state.products);
  const handleQuantity = (status: string) => {
    if (status === "aumentar") {
      return setQuantity((prev) => prev + 1);
    } else if (status === "diminuir") {
      return quantity > 1 && setQuantity((prev) => prev - 1);
    }
  };
  const handleAddProduct = ({
    product,
    userId,
    quantity,
    status,
  }: HandleAddProductProps) => {
    if (
      status !== "authenticated" &&
      status !== "loading" &&
      !userId &&
      userId === undefined
    ) {
      const cartProducts = JSON.parse(
        localStorage.getItem("cart-products") || "[]",
      );
      if (cartProducts.length !== 0) {
        let productFinded = false;
        const newQuantityCartProducts = cartProducts.map(
          (actualProduct: StorageProductProps) => {
            if (actualProduct.product.id === product.id) {
              productFinded = true;
              return {
                product: actualProduct.product,
                quantity: actualProduct.quantity + quantity,
                productId: actualProduct.productId,
              };
            } else {
              return actualProduct;
            }
          },
        );
        if (productFinded) {
          localStorage.setItem(
            "cart-products",
            JSON.stringify(newQuantityCartProducts),
          );
        } else {
          newQuantityCartProducts.push({
            product,
            quantity,
            productId: product.id,
          });
          localStorage.setItem(
            "cart-products",
            JSON.stringify(newQuantityCartProducts),
          );
        }
      } else {
        localStorage.setItem(
          "cart-products",
          JSON.stringify([{ product, quantity, productId: product.id }]),
        );
      }

      addProduct({
        product: product,
        productId: product.id,
        quantity,
      });
      ToastFunction({
        title: "Produto adicionado com sucesso!",
        name: "Carrinho",
        router: router,
      });
      return;
    }
    if (!userId || userId === undefined) {
      return;
    }
    AddProductToCart({ userId, productId: product.id, quantity });
    addProduct({ product: product, productId: product.id, userId, quantity });
    ToastFunction({
      title: "Produto adicionado com sucesso!",
      name: "Carrinho",
      router: router,
    });
  };
  return (
    <div className="flex flex-col gap-4 ">
      <div className=" flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-base text-primary">Disponível em estoque</p>
          <p className="text-xl font-semibold">{product.name}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <p className="flex gap-1 text-xl font-bold">
              R$ {Number(product.totalPrice).toFixed(2)}
            </p>
            <PercentageBadge discountPercentage={product.discountPercentage} />
          </div>
          <p
            className={`${
              product.discountPercentage === 0 && "hidden"
            } textbase flex line-through opacity-75 `}
          >
            De: {Number(product.basePrice).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <p>Quantidade:</p>
          <div className="flex items-center gap-3">
            <Button
              variant={"outline"}
              onClick={() => handleQuantity("diminuir")}
            >
              <p>{"<"}</p>
            </Button>
            <p className="flex w-10 items-center justify-center text-lg">
              {quantity}
            </p>
            <Button
              variant={"outline"}
              onClick={() => handleQuantity("aumentar")}
            >
              <p>{">"}</p>
            </Button>
          </div>
        </div>
      </div>

      <Button
        className=" font-semibold uppercase"
        onClick={() => {
          handleAddProduct({
            userId: dataUser?.user.id,
            product: product,
            quantity,
            status,
          });
        }}
      >
        Adicionar ao carrinho
      </Button>
      <div className="flex items-center justify-between rounded-lg bg-accent px-4 py-2">
        <div className="flex items-center gap-2">
          <Image
            src="/truck-icon.svg"
            alt={"truck icon"}
            width={30}
            height={30}
            sizes="auto"
          />
          <div className="flex flex-col">
            <p className="text-sm">
              Entrega via <span className="font-semibold">StorePacket®</span>
            </p>
            <p className="text-sm text-primary">
              Envio para <span className="font-semibold">todo Brasil</span>
            </p>
          </div>
        </div>
        <div className="text-sm font-semibold">Frete Grátis</div>
      </div>
      <ProductDescription description={product.description} />
    </div>
  );
};

export default ProductDetails;
