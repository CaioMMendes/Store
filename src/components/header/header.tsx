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

function Header() {
  return (
    <div>
      <Card className="flex items-center justify-between rounded-none border-x-0  border-b border-t-0 p-4">
        <HeaderMenu />
        <h1 className="text-xl font-semibold text-primary">Store</h1>
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
