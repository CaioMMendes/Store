"use client";
import { UserCart } from "@prisma/client";
import { create } from "zustand";
import { useQuery } from "react-query";
import GetProductsFromCart from "@/requests/get-products-from-cart";
import { useSession } from "next-auth/react";
import { DataUser } from "@/app/product/[slug]/components/product-details";
import { ProductWithTotalPrice } from "@/helpers/productPrice";

export interface OptionalIdUserCart extends Omit<UserCart, "id"> {
  id?: string | undefined;
  product: ProductWithTotalPrice;
}

interface ICartProducts {
  // userId: string;
  products: OptionalIdUserCart[];
  addProduct: (product: OptionalIdUserCart[]) => void;
  // setUserId: (userId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  deleteProduct: (productId: string) => void;
}

const cartProducts = create<ICartProducts>()((set) => ({
  // userId: "",
  products: [
    // { id: "fasdas", productId: "asdasd", userId: "asdasd", quantity: 2 },
  ],
  // setUserId: (userId) => {
  //   set({ userId });
  // },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      products: state.products.map((product) => {
        if (product.product.id === productId) {
          console.log("first");
          return { ...product, quantity: quantity };
        }
        return product;
      }),
    }));
  },
  addProduct: (product) => {
    if (product) {
      set((state) => ({
        products: [...state.products, ...product],
      }));
    }
  },
  deleteProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
}));
export default cartProducts;
