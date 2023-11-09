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
  userId: string;
  productId: string;
  quantity: number;
  product: ProductWithTotalPrice;
}

interface ICartProducts {
  // userId: string;
  products: OptionalIdUserCart[];
  addProduct: (productReceived: OptionalIdUserCart) => void;
  setProducts: (products: OptionalIdUserCart[]) => void;
  // setUserId: (userId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  deleteProduct: (productId: string) => void;
}

const cartProducts = create<ICartProducts>()((set, get) => ({
  products: [],
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      products: state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: quantity };
        }
        return product;
      }),
    }));
  },
  setProducts: (products) => {
    // if (products.length !== 0 && products !== undefined) {
    set((state) => ({
      // products: [...state.products, ...products],
      products: [...products],
    }));
    // }
  },
  addProduct: (productReceived) => {
    console.log(productReceived.id);
    const products = get().products;
    const findProduct = products.find(
      (p) => p.productId === productReceived.productId,
    );
    if (findProduct) {
      findProduct.quantity += productReceived.quantity;
    } else {
      products.push(productReceived);
    }
    set({ products });
    //  set((state) => ({}));
  },
  deleteProduct: (productId) => {
    const a = get().products;
    console.log(a.filter((product) => product.id !== productId));
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
}));
export default cartProducts;
