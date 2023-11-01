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

function Header() {
  return (
    <div>
      <Card className="flex items-center justify-between rounded-none border-x-0  border-b border-t-0 px-4 py-3">
        <HeaderMenu />
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="logo" height={32} width={29} />
            <h1 className="text-xl font-semibold text-primary">Store</h1>
          </div>
        </Link>
        <div className="flex">
          <HandleTheme />
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Header;
