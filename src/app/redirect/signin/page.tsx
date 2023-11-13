"use client";

import {
  DataUser,
  StorageProductProps,
} from "@/app/product/[slug]/components/product-details";
import AddProductToCart from "@/requests/add-product-to-cart";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const RedirectSigninPage = () => {
  const { data, status } = useSession();
  const searchParams = useSearchParams();
  const dataUser = data as { user: DataUser };
  const router = useRouter();
  const pathname = searchParams.get("pathname");
  console.log(dataUser);
  console.log(status);
  if (status === "loading") {
    return <div className="p-5">Loading...</div>;
  }
  if (dataUser?.user?.id === undefined || status !== "authenticated") {
    return pathname ? router.push(pathname) : router.push("/");
  } else {
    //pega os dados do localstorage e manda pro banco

    const storageProducts = JSON.parse(
      localStorage.getItem("cart-products") || "[]",
    );
    storageProducts.map((product: StorageProductProps) => {
      AddProductToCart({
        userId: dataUser.user.id as string,
        productId: product.productId,
        quantity: product.quantity,
      });
    });
    localStorage.setItem("cart-products", "[]");
    return pathname ? router.push(pathname) : router.push("/");
  }
};

export default RedirectSigninPage;
