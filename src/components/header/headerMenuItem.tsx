import { HomeIcon, PercentIcon, ListOrderedIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeaderMenuItem = ({ name, href }: { name: string; href: string }) => {
  const icons = {
    Início: <HomeIcon size={20} />,
    Ofertas: <PercentIcon size={20} />,
    Catálogo: <ListOrderedIcon size={20} />,
  };

  return (
    <Link href={`/${href}`}>
      <Button
        variant={"outline"}
        className="flex w-full items-center justify-start gap-2"
      >
        {icons[name as keyof typeof icons]} {name}
      </Button>
    </Link>
  );
};

export default HeaderMenuItem;
