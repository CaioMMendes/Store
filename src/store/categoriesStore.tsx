import { prismaClient } from "@/lib/prisma";
import { create } from "zustand";
import { Category } from "@prisma/client";

type State = {
  categories: Category[] | null;
  addCategories: (categories: Category[]) => void | number;
  fetch: () => Promise<void>;
};

const useCategoriesStore = create<State>()((set) => ({
  categories: [],
  addCategories: (categories) => {
    set(() => ({
      categories,
    }));
  },
  fetch: async () => {
    const response = await prismaClient.category.findMany({});
    set({ categories: response });
  },
}));

export default useCategoriesStore;
