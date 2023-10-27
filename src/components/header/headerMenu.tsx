import {
  MenuIcon,
  HomeIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, SheetTitle, Sheet } from "../ui/sheet";

const HeaderMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col gap-2 pl-3">
          <SheetTitle className="pl-4 text-lg font-semibold">Menu</SheetTitle>
          <div className="flex flex-col gap-2">
            <Button
              variant={"outline"}
              className="flex w-full items-center justify-start gap-2"
            >
              <HomeIcon size={20} />
              Início
            </Button>
            <Button
              variant={"outline"}
              className="flex w-full items-center justify-start gap-2"
            >
              <LogInIcon size={20} />
              Fazer login
            </Button>
            <Button
              variant={"outline"}
              className="flex w-full items-center justify-start gap-2"
            >
              <PercentIcon size={20} />
              Ofertas
            </Button>
            <Button
              variant={"outline"}
              className="flex w-full items-center justify-start gap-2"
            >
              <ListOrderedIcon size={20} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default HeaderMenu;
