import { UserOrderWithUserProductProps } from "@/app/user/orders/page";
import { UserOrder } from "@prisma/client";
import { create } from "zustand";

interface OrderType {
  orders: UserOrderWithUserProductProps[] | [];
  setOrder: (order: UserOrderWithUserProductProps[]) => void;
  deleteOrder: (orderId: string) => void;
}

const orderProvider = create<OrderType>()((set, get) => ({
  orders: [],
  setOrder: (order) => {
    set((state) => ({
      orders: [...order],
    }));
  },
  deleteOrder: (orderId: string) => {
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== orderId),
    }));
  },
}));

export default orderProvider;
