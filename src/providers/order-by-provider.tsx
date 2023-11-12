import { create } from "zustand";

export interface OrderByProps {
  type: "discountPercentage" | "price";
  lowestBiggest: "desc" | "asc";
}

interface OrderByType {
  orderBy: OrderByProps;
  setOrderBy: (orderBy: OrderByProps) => void;
}

const orderBy = create<OrderByType>()((set, get) => ({
  orderBy: {
    type: "discountPercentage",
    lowestBiggest: "desc",
  },
  setOrderBy: (orderBy) => {
    set(() => ({
      orderBy: { ...orderBy },
    }));
  },
}));

export default orderBy;
