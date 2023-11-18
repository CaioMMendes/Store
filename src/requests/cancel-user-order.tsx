const CancelUserOrder = async ({ orderId }: { orderId: string }) => {
  if (!orderId || orderId === undefined) {
    return console.log("Missing orderId");
  }

  const response = await fetch(`/api/order/user/delete-order`, {
    method: "DELETE",
    body: Buffer.from(
      JSON.stringify({
        orderId,
      }),
    ),
  });

  if (response.ok) {
    const message = await response.json();
    return message;
  }
};

export default CancelUserOrder;
