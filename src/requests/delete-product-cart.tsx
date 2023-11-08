import { HandleAddProductProps } from "@/app/product/[slug]/components/product-details";

interface DeleteProductCartProps {
  cartProductId: string;
}

const DeleteProductCart = async ({ cartProductId }: DeleteProductCartProps) => {
  if (!cartProductId || cartProductId === undefined) {
    return console.log("Missing cartProductId");
  }

  const response = await fetch(`/api/cart/deleteUserProduct`, {
    method: "DELETE",
    body: Buffer.from(
      JSON.stringify({
        cartProductId,
      }),
    ),
  });

  if (response.ok) {
    const message = await response.json();
    return message;
  }
};

export default DeleteProductCart;
