const GetCategoryProductsRequest = async (slug: string) => {
  const response = await fetch(`/api/product/category?slug=${slug}`, {
    method: "GET",
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  }
};

export default GetCategoryProductsRequest;
