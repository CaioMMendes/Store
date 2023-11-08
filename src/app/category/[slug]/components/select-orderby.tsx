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

  const handleValueChange = (value: string) => {
    console.log(value);
  };
  return (
    <Select onValueChange={(value) => handleValueChange(value)}>
      <SelectTrigger>
        <SelectValue placeholder="Ofertas" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => {
            e.preventDefault();
          };
        }}
      >
        <SelectGroup>
          <SelectItem value="lowestPrice">Menor Preço</SelectItem>
          <SelectItem value="biggestPrice">Maior Preço</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOrderBy;
