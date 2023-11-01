"use client";
import {
  MenuIcon,
  HomeIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, SheetTitle, Sheet } from "../ui/sheet";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import HeaderMenuItem from "./headerMenuItem";

const HeaderMenu = () => {
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  const { data, status } = useSession();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col gap-2 pl-3">
          <div className=" flex flex-col gap-2">
            <SheetTitle
              className={`pl-4 text-lg font-semibold ${
                status === "authenticated" && "order-2"
              } `}
            >
              Menu
            </SheetTitle>
            {status === "unauthenticated" && !data ? (
              <Button
                variant={"outline"}
                className="flex w-full items-center justify-start gap-2"
                onClick={handleLoginClick}
              >
                <LogInIcon size={20} />
                Fazer login
              </Button>
            ) : (
              <div className="order-1 flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2 pl-4">
                  <Avatar>
                    {data?.user?.image && (
                      <AvatarImage src={data?.user?.image} alt="Avatar image" />
                    )}
                    <AvatarFallback className="order-1">
                      {/* O que aparece até a imagem ser carregada */}
                      {data?.user?.name?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-medium">{data?.user?.name}</p>
                </div>
                <Separator />
              </div>
            )}
            <div className="order-3 flex flex-col gap-2">
              <HeaderMenuItem name={"Início"} href={""} />
              <HeaderMenuItem name={"Ofertas"} href={""} />
              <HeaderMenuItem name={"Catálogo"} href={"catalog"} />

              {status === "authenticated" && (
                <Button
                  variant={"outline"}
                  className="flex w-full items-center justify-start gap-2"
                  onClick={handleLogoutClick}
                >
                  <LogOutIcon size={20} />
                  Fazer logout
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default HeaderMenu;
