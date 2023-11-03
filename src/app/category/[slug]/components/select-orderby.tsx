"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SelectOrderBy = () => {
  const [order, setOrder] = useState<string>("Ordenar");
  return (
    <Select>
      <SelectTrigger className="z-10">
        <SelectValue placeholder="Ofertas" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="z-10">
          <SelectItem value="lowestPrice">Menor Preço</SelectItem>
          <SelectItem value="biggestPrice">Maior Preço</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOrderBy;
