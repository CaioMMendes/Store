"use client";

import { DataProps } from "@/app/cart/components/cart-content";
import getAllUserOrders from "@/requests/get-all-user-orders";
import { Product, UserOrder, UserProduct } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import LoginUserRequests from "./components/login";
import OrderItem from "./components/order-item";

export interface UserOrderWithUserProductProps extends UserOrder {
  userProducts: UserProductWithProduct[];
}

export interface UserProductWithProduct extends UserProduct {
  product: Product;
}

const UserOrdersPage = () => {
  const { data, status } = useSession();
  const dataUser = data as DataProps;
  const router = useRouter();

  const {
    data: userOrdersData,
    isError: userOrdersIsError,
    isLoading: userOrdersIsLoading,
  } = useQuery({
    queryKey: [`userOrders`, dataUser?.user.id /* productsZustand */],
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
    console.log(userOrdersData);
    return (
      <div className="p-5">
        Meus pedidos
        <div className="flex flex-col gap-5">
          {userOrdersData?.map((order: UserOrderWithUserProductProps) => {
            console.log(order.userProducts);
            return <OrderItem order={order} key={order.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default UserOrdersPage;
