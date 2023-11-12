import { OrderByProps } from "@/providers/order-by-provider";

const GetAllCategoriesRequest = async () => {
  const response = await fetch(`/api/categories/getAll`, {
    method: "GET",
  });

  if (response.ok) {
    const categories = await response.json();
    return categories;
  }
};

export default GetAllCategoriesRequest;
