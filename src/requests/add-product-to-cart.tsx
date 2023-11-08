import { HandleAddProductProps } from "@/app/product/[slug]/components/product-details";

interface AddProductToCartProps {
  userId: string;
  productId: string;
  quantity: number;
}

const AddProductToCart = async ({
  userId,
  productId,
  quantity,
}: AddProductToCartProps) => {
  if (!userId) {
    return console.log("Missing userId");
  }
  console.log(userId, productId, quantity);
  const response = await fetch(`/api/cart/addUserProduct`, {
    method: "POST",
    body: Buffer.from(
      JSON.stringify({
        userId,
        productId,
        quantity,
      }),
    ),
  });

  if (response.ok) {
    const message = await response.json();
    return message;
  }
};

export default AddProductToCart;
