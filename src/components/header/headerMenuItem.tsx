import {
  HomeIcon,
  PercentIcon,
  ListOrderedIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

const HeaderMenuItem = ({ name, href }: { name: string; href: string }) => {
  const icons = {
    Início: <HomeIcon size={20} />,
    Ofertas: <PercentIcon size={20} />,
    Catálogo: <ListOrderedIcon size={20} />,
    Meuspedidos: <ShoppingBasketIcon size={20} />,
  };
  return (
    <SheetClose asChild>
      <Link href={`/${href}`}>
        <Button
          variant={"outline"}
          className="flex w-full items-center justify-start gap-2"
        >
          {icons[name.replace(" ", "") as keyof typeof icons]} {name}
        </Button>
      </Link>
    </SheetClose>
  );
};

export default HeaderMenuItem;
