import { prismaClient } from "@/lib/prisma";
import ProductList from "./product-list";

const DealsList = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: {
      discountPercentage: "desc",
    },
  });
  // const dealsWithoutDecimal = JSON.parse(JSON.stringify(deals));
  return (
    <div>
      <ProductList products={deals} />
    </div>
  );
};

export default DealsList;
