import Image from "next/image";
import Link from "next/link";
import CartSheet from "../../app/cart/components/cart-sheet";
import { HandleTheme } from "../handleTheme";
import { Card } from "../ui/card";
import HeaderMenu from "./headerMenu";

function Header() {
  return (
    <div className="sticky top-0 z-[60] ">
      <Card className="relative z-[60] flex w-full items-center justify-between rounded-none border-x-0 border-b-[1.5px]  border-t-0 bg-background px-4 py-3">
        <div className="z-[61]">
          <HeaderMenu />
        </div>
        <div className="absolute left-0 top-0  flex h-full w-full items-center justify-center ">
          <Link
            href={"/"}
            className="z-[61] flex items-center justify-center gap-2"
          >
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
        <div className="z-[61] flex gap-1">
          <HandleTheme />
          <CartSheet />
        </div>
      </Card>
    </div>
  );
}

export default Header;
