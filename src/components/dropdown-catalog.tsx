"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  KeyboardIcon,
  MonitorIcon,
  HeadphonesIcon,
  SquareIcon,
  SpeakerIcon,
  MouseIcon,
  ShapesIcon,
  ListIcon,
} from "lucide-react";
import { Category } from "@prisma/client";

interface CatalogItems {
  catalog: Category[];
}
const DropDownCatalog = ({ catalog }: CatalogItems) => {
  const icons = {
    keyboards: <KeyboardIcon width={21} />,
    monitors: <MonitorIcon width={21} />,
    headphones: <HeadphonesIcon width={21} />,
    mousepads: <SquareIcon width={21} />,
    speakers: <SpeakerIcon width={21} />,
    mouses: <MouseIcon width={21} />,
    catalog: <ListIcon width={21} />,
  };
  const pathname = usePathname();
  console.log(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {pathname === "/catalog" && (
          <Button variant="outline" className="gap-1.5">
            {icons["catalog" as keyof typeof icons]}Catálogo
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[9.5rem]">
        {pathname !== "/catalog" && (
          <DropdownMenuItem className="cursor-pointer">
            {icons["catalog" as keyof typeof icons]}
            Catálogo
          </DropdownMenuItem>
        )}

        {catalog.map((item) => {
          return (
            <DropdownMenuItem
              className="flex cursor-pointer justify-center gap-1.5"
              key={item.id}
            >
              <span className="flex w-1/4 justify-center">
                {icons[item.slug as keyof typeof icons]}
              </span>
              <p className="flex w-fit flex-1 justify-start"> {item.name}</p>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownCatalog;
