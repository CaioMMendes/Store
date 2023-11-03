const SearchProductRequest = async (product: string | null) => {
  const response = await fetch(`/api/product/search?product=${product}`, {
    method: "GET",
  });

  if (response.ok) {
    const product = await response.json();
    return product;
  }
};

export default SearchProductRequest;
