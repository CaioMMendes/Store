"use client";

import { DataProps } from "@/app/cart/components/cart-content";
import getAllUserOrders from "@/requests/get-all-user-orders";
import { Product, UserOrder, UserProduct } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import LoginUserRequests from "./components/login";
import OrderItem from "./components/order-item";
import { useState } from "react";
import orderProvider from "@/providers/order-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface UserOrderWithUserProductProps extends UserOrder {
  userProducts: UserProductWithProduct[];
}

export interface UserProductWithProduct extends UserProduct {
  product: Product;
}

const UserOrdersPage = () => {
  const { data, status } = useSession();
  const dataUser = data as DataProps;
  const setOrders = orderProvider((state) => state.setOrder);
  const orders = orderProvider((state) => state.orders);
  const {
    data: userOrdersData,
    isError: userOrdersIsError,
    isLoading: userOrdersIsLoading,
  } = useQuery({
    queryKey: [`userOrders`, dataUser?.user.id /* productsZustand */],
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setOrders(data);
      }
    },
    cacheTime: 0,
    queryFn: async () => await getAllUserOrders(dataUser?.user.id),
  });
  if (userOrdersIsError) {
    return (
      <div className="p-5">
        Ocorreu um erro, recarregue a página e tente novamente em alguns
        instantes.
      </div>
    );
  }
  if (status === "loading" || userOrdersIsLoading) {
    return <div className="p-5">Loading...</div>;
  } else if (status === "unauthenticated") {
    return <LoginUserRequests />;
  } else if (status === "authenticated") {
    return (
      <div>
        {orders.length > 0 ? (
          <div className="flex flex-col gap-5 p-5">
            <p className="text-lg font-semibold">Meus pedidos</p>
            <div className="flex flex-col gap-5">
              {orders.map((order: UserOrderWithUserProductProps) => {
                return <OrderItem order={order} key={order.id} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 p-5">
            <p>Você ainda não possui nenhum pedido.</p>
            <Link href={"/category/deals/"}>
              <Button className="w-full">Ver Ofertas</Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default UserOrdersPage;
