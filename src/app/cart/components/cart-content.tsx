"use client";
import { DataUser } from "@/app/product/[slug]/components/product-details";
import { computeProductTotalPrice } from "@/helpers/productPrice";
import { productsDiscountsCalc } from "@/helpers/products-discounts-calc";
import { productsSubtotalCalc } from "@/helpers/products-subtotal-calc";
import { productsTotalCalc } from "@/helpers/products-total-calc";
import cartProducts from "@/providers/cart-provider";
import { queryClient } from "@/providers/query-client";
import GetProductsFromCart from "@/requests/get-products-from-cart";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import CartDetailsLine from "./cart-details-line";
import CartProductItem from "./cart-product-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
interface DataProps {
  user: DataUser;
}

const CartContent = () => {
  const { data, status } = useSession();
  const dataUser = data as DataProps;
  const productsZustand = cartProducts((state) => state.products);
  const setProducts = cartProducts((state) => state.setProducts);
  const pathname = usePathname();
  const pathnameSelected = pathname.split("/")[1];
  queryClient.setQueryDefaults(["cartProducts" /* productsZustand */], {
    staleTime: 1,
    cacheTime: 0,
  });
  const {
    data: cartProductsData,
    isError: cartProductsIsError,
    isLoading: cartProductsIsLoading,
  } = useQuery({
    queryKey: [`cartProducts`, dataUser?.user.id /* productsZustand */],
    cacheTime: 0,
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setProducts(data);
      }
    },
    queryFn: async () => await GetProductsFromCart(dataUser?.user.id),
  });

  const productsSubtotal = useMemo(
    () => productsSubtotalCalc(productsZustand),
    [productsZustand],
  );
  const productsDiscount = useMemo(
    () => productsDiscountsCalc(productsZustand),
    [productsZustand],
  );
  const productsTotal = useMemo(
    () => productsTotalCalc(productsZustand),
    [productsZustand],
  );

  if (cartProductsIsError) {
    alert("Ocorreu um erro");
    return <div>Ocorreu um erro!</div>;
  }
  if (cartProductsIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full flex-1 flex-col gap-3 ">
      {productsZustand.length === 0 && (
        <div className="flex flex-col gap-3">
          <p>Você ainda não possui nenhum produto no carrinho.</p>
          {pathnameSelected === "cart" ? (
            <Link href={"/category/deals"}>
              <Button className="flex w-full text-base font-semibold">
                Ver Ofertas
              </Button>
            </Link>
          ) : (
            <SheetClose asChild>
              <Link href={"/category/deals"}>
                <Button className="flex w-full text-base font-semibold">
                  Ver Ofertas
                </Button>
              </Link>
            </SheetClose>
          )}
        </div>
      )}
      {productsZustand.length > 0 &&
        productsZustand.map((product) => {
          return (
            <div key={product.id ? product.id : uuidv4()}>
              <CartProductItem
                cartProductId={product.id}
                status={status}
                product={computeProductTotalPrice(product.product)}
                quantity={product.quantity}
              />
            </div>
          );
        })}
      {productsZustand.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="mb-3 flex flex-col gap-2">
            <CartDetailsLine
              text={"Subtotal"}
              value={`R$ ${productsSubtotal?.toFixed(2)}`}
            />
            <CartDetailsLine text={"Entrega"} value={`${"GRÁTIS"}`} />

            <CartDetailsLine
              text={"Descontos"}
              value={`- R$ ${productsDiscount?.toFixed(2)}`}
            />

            <CartDetailsLine
              text={"Total"}
              value={`R$ ${productsTotal?.toFixed(2)}`}
            />
          </div>
          <Button className="flex w-full text-base font-semibold">
            Finalizar compra
          </Button>
          {pathnameSelected !== "cart" && (
            <div className="flex flex-col gap-2 pb-2 ">
              <SheetClose asChild>
                <Link href={"/cart"}>
                  <Button className="flex w-full text-base font-semibold">
                    Ver Carrinho
                  </Button>
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartContent;
