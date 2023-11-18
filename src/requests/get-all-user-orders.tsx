const getAllUserOrders = async (userId: string | undefined) => {
  if (!userId) {
    return;
  }
  const response = await fetch(`/api/order/user/getAll`, {
    method: "POST",
    body: Buffer.from(
      JSON.stringify({
        userId,
      }),
    ),
  });

  if (response.ok) {
    const categories = await response.json();
    return categories;
  }
};

export default getAllUserOrders;
