import { HandleTheme } from "./handleTheme";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

function Header() {
  return (
    <div>
      <Card className="flex items-center justify-between rounded-none border-x-0  border-b border-t-0 p-4">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
        <h1 className="text-xl font-semibold text-primary">Store</h1>
        <div className="flex">
          <HandleTheme />
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </div>
      </Card>
      Header
    </div>
  );
}

export default Header;
