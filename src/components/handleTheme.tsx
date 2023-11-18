"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function HandleTheme() {
  const { setTheme, theme } = useTheme();
  function handleTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  return (
    <Button
      variant="outline"
      size="icon"
      className="dark:primary-foreground flex w-fit  gap-2 border px-2 text-primary-foreground hover:border-primary hover:bg-primary hover:outline-none dark:border dark:hover:text-primary-foreground"
      onClick={handleTheme}
    >
      <SunIcon className="h-[1.2rem]  w-fit rotate-0 scale-100  dark:hidden dark:-rotate-90" />
      <MoonIcon className=" hidden h-[1.2rem] w-fit  rotate-90 scale-0  dark:flex dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
