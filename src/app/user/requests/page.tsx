"use client";

import { DataProps } from "@/app/cart/components/cart-content";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginUserRequests from "./components/login";
import { useQuery } from "react-query";
import getAllUserOrders from "@/requests/get-all-user-orders";
import { Product, UserOrder, UserProduct } from "@prisma/client";

interface UserOrderWithUserProductProps extends UserOrder {
  userProducts: UserProductWithProduct[];
}

interface UserProductWithProduct extends UserProduct {
  product: Product;
}

const UserRequestsPage = () => {
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
            return (
              <div key={order.id} className="flex flex-col">
                <div>{order.orderNumber}</div>
                <div>{order.status}</div>
                <div>{Number(order?.userProducts[0]?.totalPaid)}</div>
                <div>{order?.userProducts[0]?.quantity}</div>
                <div>
                  {order?.userProducts?.map(
                    (product: UserProductWithProduct) => {
                      return (
                        <div key={product.id}>
                          <div>
                            {product.quantity}
                            {product.product.name}
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
                {/* <div>{order.}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default UserRequestsPage;
