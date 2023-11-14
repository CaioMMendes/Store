"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  ListIcon,
  MonitorIcon,
  MouseIcon,
  PercentIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface CatalogItems {
  catalog: Category[];
  category: string;
}
const DropDownCatalog = ({ catalog, category }: CatalogItems) => {
  const icons = {
    keyboards: <KeyboardIcon width={21} />,
    monitors: <MonitorIcon width={21} />,
    headphones: <HeadphonesIcon width={21} />,
    mousepads: <SquareIcon width={21} />,
    speakers: <SpeakerIcon width={21} />,
    mouses: <MouseIcon width={21} />,
    catalog: <ListIcon width={21} />,
    deals: <PercentIcon width={21} />,
  };
  const translate = {
    keyboards: "teclados",
    mouses: "mouses",
    headphones: "Fones",
    monitors: "Monitores",
    speakers: "speakers",
    mousepads: "mousepads",
    deals: "Ofertas",
  };
  const pathname = usePathname();
  const selected = pathname.split("/")[2];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {pathname === "/catalog/" ? (
          <Button variant="outline" className="gap-1.5 ">
            {icons["catalog" as keyof typeof icons]} Catálogo
          </Button>
        ) : (
          <Button variant="outline" className="gap-1.5  capitalize">
            {icons[category as keyof typeof icons]}
            {translate[category as keyof typeof translate]}
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[9.5rem]">
        {catalog.map((item) => {
          return (
            selected !== item.slug && (
              <Link href={`/category/${item.slug}`} key={item.id}>
                <DropdownMenuItem className="flex cursor-pointer justify-center gap-1.5">
                  <span className="flex w-1/4 justify-center">
                    {icons[item.slug as keyof typeof icons]}
                  </span>
                  <p className="flex w-fit flex-1 justify-start">
                    {" "}
                    {item.name}
                  </p>
                </DropdownMenuItem>
              </Link>
            )
          );
        })}
        {pathname !== "/category/deals/" && (
          <Link href={"/category/deals/"}>
            <DropdownMenuItem className="flex cursor-pointer justify-center gap-1.5">
              <span className="flex w-1/4 justify-center">
                {icons["deals" as keyof typeof icons]}
              </span>
              <p className="flex w-fit flex-1 justify-start"> Ofertas</p>
            </DropdownMenuItem>
          </Link>
        )}
        {pathname !== "/catalog/" && (
          <Link href={"/catalog/"}>
            <DropdownMenuItem className="flex cursor-pointer justify-center gap-1.5">
              <span className="flex w-1/4 justify-center">
                {icons["catalog" as keyof typeof icons]}
              </span>
              <p className="flex w-fit flex-1 justify-start"> Catálogo</p>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownCatalog;
