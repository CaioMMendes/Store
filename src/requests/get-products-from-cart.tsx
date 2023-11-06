const GetProductsFromCart = async (userId: string | undefined) => {
  if (!userId) {
    return console.log("Missing userId");
  }
  console.log(userId);
  const response = await fetch(`/api/cart/getProducts`, {
    method: "POST",
    body: Buffer.from(
      JSON.stringify({
        userId,
      }),
    ),
  });

  if (response.ok) {
    const products = await response.json();
    return products;
  }
};

export default GetProductsFromCart;
