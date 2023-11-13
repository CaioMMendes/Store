"use client";
import { ProductWithTotalPrice } from "@/helpers/productPrice";
import { UserCart } from "@prisma/client";
import { create } from "zustand";

export interface OptionalIdUserCart extends Omit<UserCart, "id" | "userId"> {
  id?: string | undefined;
  userId?: string;
  productId: string;
  quantity: number;
  product: ProductWithTotalPrice;
}

interface ICartProducts {
  products: OptionalIdUserCart[];
  addProduct: (productReceived: OptionalIdUserCart) => void;
  setProducts: (products: OptionalIdUserCart[]) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    status: "unauthenticated" | "loading" | "authenticated",
  ) => void;
  deleteProduct: (
    productId: string,
    status: "authenticated" | "unauthenticated" | "loading",
  ) => void;
}

const cartProducts = create<ICartProducts>()((set, get) => ({
  products: [],
  updateQuantity: (productId, quantity, status) => {
    if (status === "authenticated") {
      set((state) => ({
        products: state.products.map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: quantity };
          }
          return product;
        }),
      }));
    } else {
      set((state) => ({
        products: state.products.map((product) => {
          if (product.product.id === productId) {
            return { ...product, quantity: quantity };
          }
          return product;
        }),
      }));
    }
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
  deleteProduct: (productId, status) => {
    if (status === "authenticated") {
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
    } else {
      set((state) => ({
        products: state.products.filter(
          (product) => product.productId !== productId,
        ),
      }));
    }
  },
}));
export default cartProducts;
