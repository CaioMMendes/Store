import DropDownCatalog from "@/components/dropdown-catalog";
import { prismaClient } from "@/lib/prisma";
import CategoryItemCatalog from "./components/category-item-catalog";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex h-full flex-col gap-5 p-4">
      <DropDownCatalog catalog={categories} category={"catalog"} />
      <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-3">
        {categories.map((category) => {
          return <CategoryItemCatalog category={category} key={category.id} />;
        })}
      </div>
    </div>
  );
};

export default CatalogPage;
