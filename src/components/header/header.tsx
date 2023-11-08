import { HandleTheme } from "../handleTheme";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import HeaderMenu from "./headerMenu";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import CartSheet from "../cart/cart-sheet";

function Header() {
  return (
    <div>
      <Card className=" relative flex items-center justify-between rounded-none border-x-0  border-b border-t-0 px-4 py-3">
        <div className="z-10">
          <HeaderMenu />
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center ">
          <Link href={"/"} className="flex items-center justify-center gap-2">
            <div className="flex h-7 w-8">
              <Image
                src="/logo.png"
                alt="logo"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h1 className="text-xl font-semibold text-primary">Store</h1>
          </Link>
        </div>
        <div className="z-10 flex">
          <HandleTheme />
          <CartSheet />
        </div>
      </Card>
    </div>
  );
}

export default Header;
