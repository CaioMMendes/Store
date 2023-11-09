"use client";
import { DataUser } from "@/app/product/[slug]/components/product-details";
import cartProducts, { OptionalIdUserCart } from "@/providers/cart-provider";
import GetProductsFromCart from "@/requests/get-products-from-cart";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import CartProductItem from "./cart-product-item";
import {
  ProductWithTotalPrice,
  computeProductTotalPrice,
} from "@/helpers/productPrice";
import CartDetailsLine from "./cart-details-line";
import { productsSubtotalCalc } from "@/helpers/products-subtotal-calc";
import { productsTotalCalc } from "@/helpers/products-total-calc";
import { productsDiscountsCalc } from "@/helpers/products-discounts-calc";
import { v4 as uuidv4 } from "uuid";
import { queryClient } from "@/providers/query-client";
interface DataProps {
  user: DataUser;
}

const CartContent = () => {
  const { data, status } = useSession();
  const dataUser = data as DataProps;
  const productsZustand = cartProducts((state) => state.products);
  const addProduct = cartProducts((state) => state.addProduct);
  const setProducts = cartProducts((state) => state.setProducts);
  queryClient.setQueryDefaults(["cartProducts" /* productsZustand */], {
    staleTime: 1,
    cacheTime: 0,
  });
  const {
    data: cartProductsData,
    isError: cartProductsIsError,
    isLoading: cartProductsIsLoading,
  } = useQuery({
    queryKey: [`cartProducts` /* productsZustand */],
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
  // if (cartProductsData) {
  //   // if (cartProductsData.length !== 0 && cartProductsData !== undefined) {
  //   if (
  //     productsZustand === undefined ||
  //     productsZustand.length === 0 ||
  //     productsZustand.length > cartProductsData.length
  //   ) {
  //     console.log(cartProductsData);
  //     cartProductsData.length > 0 && setProducts(cartProductsData);
  //   }
  //   // }
  // }

  return (
    <div className="flex flex-col gap-3 ">
      {productsZustand.length === 0 && (
        <div>
          <p>Você ainda não possui nenhum produto no carrinho.</p>
        </div>
      )}
      {productsZustand.length > 0 &&
        productsZustand.map((product) => {
          return (
            <div key={product.id}>
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
        <div className="flex flex-col gap-2">
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
      )}
    </div>
  );
};

export default CartContent;
