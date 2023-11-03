const ProductItemRequest = async (slug: string) => {
  const response = await fetch(`/api/product?slug=${slug}`, {
    method: "GET",
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  }
};

export default ProductItemRequest;
