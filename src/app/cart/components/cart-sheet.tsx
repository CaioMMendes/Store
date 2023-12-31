"use client";
import { NumberOfProducts } from "@/helpers/number-of-products";
import cartProducts from "@/providers/cart-provider";
import { queryClient } from "@/providers/query-client";
import GetProductsFromCart from "@/requests/get-products-from-cart";
import { ShoppingCartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../../components/ui/sheet";
import CartContent, { DataProps } from "./cart-content";

const CartSheet = () => {
  const productsZustand = cartProducts((state) => state.products);
  const setProducts = cartProducts((state) => state.setProducts);

  const { data, status } = useSession();
  const dataUser = data as DataProps;
  queryClient.setQueryDefaults(["numberOfProducts" /* productsZustand */], {
    staleTime: 1,
    cacheTime: 0,
  });
  const {} = useQuery({
    queryKey: [`numberOfProducts`, dataUser?.user.id /* productsZustand */],
    cacheTime: 0,
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setProducts(data);
      }
    },
    queryFn: async () => await GetProductsFromCart(dataUser?.user.id),
  });
  useEffect(() => {
    if (status === "unauthenticated") {
      const localStorageProducts = JSON.parse(
        localStorage.getItem("cart-products") || "[]",
      );
      setProducts(localStorageProducts);
    }
  }, []); // eslint-disable-line
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="relative">
            <Button size="icon" variant="outline">
              <ShoppingCartIcon />
            </Button>
            {productsZustand.length > 0 && (
              <div className="absolute -right-3 -top-2 rounded-full bg-primary px-2.5 py-1.5 text-sm leading-3">
                {NumberOfProducts(productsZustand)}
              </div>
            )}
          </div>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="z-[80] flex h-full  w-[90%] flex-col gap-2 overflow-auto pb-3 pl-3"
        >
          <SheetHeader className="flex w-full flex-row items-center justify-start gap-2">
            <ShoppingCartIcon width={20} />
            Carrinho
          </SheetHeader>
          <CartContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
