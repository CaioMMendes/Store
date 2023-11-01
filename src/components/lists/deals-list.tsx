import { prismaClient } from "@/lib/prisma";
import ProductList from "../../app/(home)/components/product-list";

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
      <ProductList products={deals} title={"ofertas"} slug={"deals"} />
    </div>
  );
};

export default DealsList;
