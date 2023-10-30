"use client";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcons = {
    keyboards: <KeyboardIcon />,
    monitors: <MonitorIcon />,
    headphones: <HeadphonesIcon />,
    mousepads: <SquareIcon />,
    speakers: <SpeakerIcon />,
    mouses: <MouseIcon />,
  };

  return (
    <Button variant={"outline"} className="flex justify-center gap-2 p-2">
      <span className="flex w-1/3 justify-center">
        {categoryIcons[category.slug as keyof typeof categoryIcons]}
      </span>
      <p className="flex w-fit flex-1 text-xs font-semibold">{category.name}</p>
    </Button>
  );
};

export default CategoryItem;
