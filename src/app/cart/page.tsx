import CartContent from "@/app/cart/components/cart-content";
import { ShoppingCartIcon } from "lucide-react";

const CartPage = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex gap-2">
        <ShoppingCartIcon width={20} height={20} />
        <h1 className="text-lg font-semibold">Carrinho</h1>
      </div>
      <CartContent />
    </div>
  );
};

export default CartPage;
