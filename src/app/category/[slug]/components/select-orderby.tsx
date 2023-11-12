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
import orderBy from "@/providers/order-by-provider";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SelectOrderBy = () => {
  const orderByZustand = orderBy((state) => state.orderBy);
  const setOrderBy = orderBy((state) => state.setOrderBy);
  const pathname = usePathname();
  const handleValueChange = (value: string) => {
    console.log(value);

    if (value === "deals") {
      setOrderBy({
        type: "discountPercentage",
        lowestBiggest: "desc",
      });
    } else if (value === "lowestPrice") {
      setOrderBy({
        type: "price",
        lowestBiggest: "asc",
      });
    } else if (value === "biggestPrice") {
      setOrderBy({
        type: "price",
        lowestBiggest: "desc",
      });
    }
  };

  const selectedTranslated =
    orderByZustand.type === "discountPercentage"
      ? "Ofertas"
      : orderByZustand.lowestBiggest === "asc"
      ? "Menor Preço"
      : "Maior Preço";

  return (
    <Select onValueChange={(value) => handleValueChange(value)}>
      <SelectTrigger>
        <SelectValue placeholder={`${selectedTranslated}`} />
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
          <SelectItem value={"deals"}>Ofertas</SelectItem>
          <SelectItem value="lowestPrice">Menor Preço</SelectItem>
          <SelectItem value="biggestPrice">Maior Preço</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOrderBy;
