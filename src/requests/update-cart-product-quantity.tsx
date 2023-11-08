import { HandleAddProductProps } from "@/app/product/[slug]/components/product-details";

interface UpdateCartProductQuantityProps {
  cartProductId: string;
  quantity: number;
}

const UpdateCartProductQuantity = async ({
  cartProductId,
  quantity,
}: UpdateCartProductQuantityProps) => {
  if (!cartProductId || cartProductId === undefined) {
    return console.log("Missing cartProductId");
  }

  const response = await fetch(`/api/cart/updateCartProductQuantity`, {
    method: "PATCH",
    body: Buffer.from(
      JSON.stringify({
        cartProductId,
        quantity,
      }),
    ),
  });

  if (response.ok) {
    const message = await response.json();
    return message;
  }
};

export default UpdateCartProductQuantity;
