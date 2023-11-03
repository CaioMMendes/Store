import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemCatalogProps {
  category: Category;
}

const CategoryItemCatalog = ({ category }: CategoryItemCatalogProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex h-full flex-col ">
        <div className="flex w-full flex-1 items-center justify-center rounded-t-lg bg-gradient-to-r from-[#5d43c7] to-[#4f32c3]">
          <Image
            src={category.imageURL}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[75%] w-auto max-w-[90%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex items-center justify-center rounded-b-lg bg-accent p-2">
          <p className="font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItemCatalog;
