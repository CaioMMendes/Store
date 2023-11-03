import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";
import useCategoriesStore from "@/store/categoriesStore";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2  gap-x-4 gap-y-3 ">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
