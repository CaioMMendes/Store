"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const DropdownOrderBy = () => {
  const [order, setOrder] = useState<string>("Ordenar");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-1.5">
          {order}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[9.5rem]">
        <DropdownMenuItem className="flex cursor-pointer justify-center gap-1.5">
          <Button
            variant="outline"
            className="gap-1.5"
            onClick={() => {
              setOrder("Preço");
            }}
          >
            Preço
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownOrderBy;
