"use client";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../../../components/ui/sheet";
import Link from "next/link";
import CartContent from "./cart-content";

const CartSheet = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="flex h-full w-[90%] flex-col gap-2 overflow-auto pl-3"
        >
          <SheetHeader className="flex w-full flex-row items-center justify-start gap-2">
            <ShoppingCartIcon width={20} />
            Carrinho
          </SheetHeader>
          <CartContent />
          <div>
            <SheetClose asChild>
              <Link href={"/cart"}>
                <Button className="flex w-full">Ver Carrinho</Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
