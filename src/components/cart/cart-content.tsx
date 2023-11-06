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

interface DataProps {
  user: DataUser;
}

const CartContent = () => {
  const { data, status } = useSession();
  const [products, setProducts] = useState([]);

  const dataUser = data as DataProps;

  const {
    data: cartProductsData,
    isError: cartProductsIsError,
    isLoading: cartProductsIsLoading,
  } = useQuery({
    queryKey: ["cartProducts"],
    cacheTime: 1000,
    queryFn: async () => await GetProductsFromCart(dataUser?.user.id),
  });

  const productsZustand = cartProducts((state) => state.products);
  console.log(productsZustand);
  const addProduct = cartProducts((state) => state.addProduct);
  const [productsValue, setProductsValue] = useState<number>();

  // Atualizar productsValue quando productsZustand mudar
  //   useEffect(() => {
  //     setProductsValue(productValuesCalc(productsZustand));
  //   }, [productsZustand]);
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

  //   useEffect(() => {
  //     if (cartProductsIsLoading) {
  //       return;
  //     }
  //     if (productsZustand === undefined || productsZustand.length === 0) {
  //       addProduct(cartProductsData);
  //     }
  //   }, []);
  // console.log(products);

  if (cartProductsIsError) {
    alert("Ocorreu um erro");
    return <div>Ocorreu um erro!</div>;
  }
  if (cartProductsIsLoading) {
    return <div>Loading...</div>;
  }
  if (
    (productsZustand === undefined || productsZustand.length === 0) &&
    cartProductsData
  ) {
    console.log(cartProductsData);
    addProduct(cartProductsData);
  }

  console.log(dataUser?.user.id, cartProductsData, productsZustand);
  console.log(productsZustand.length);
  return (
    <div className="flex flex-col gap-2">
      {productsZustand.length > 0 &&
        productsZustand.map((product) => {
          console.log(product);
          console.log(product.product);
          return (
            <div key={product.id}>
              <CartProductItem
                product={computeProductTotalPrice(product.product)}
                quantity={product.quantity}
              />
            </div>
          );
        })}
      {productsZustand.length > 0 && (
        <div className="flex flex-col gap-2">
          <CartDetailsLine text={"Subtotal"} value={`R$ ${productsSubtotal}`} />
          <CartDetailsLine text={"Entrega"} value={`${"GRÁTIS"}`} />
          <CartDetailsLine
            text={"Descontos"}
            value={`- R$ ${productsDiscount}`}
          />
          <CartDetailsLine text={"Total"} value={`R$ ${productsTotal}`} />
        </div>
      )}
    </div>
  );
};

export default CartContent;
