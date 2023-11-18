import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LoginUserOrders = () => {
  const pathname = usePathname();

  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: `/redirect/signin?pathname=${pathname}`,
    });
  };
  return (
    <div className="flex h-full w-full flex-col items-center gap-5 px-5 pt-8">
      <h1 className="text-justify text-xl">
        É necessário realizar o login para vizualizar esta página.
      </h1>
      <Button
        className="w-full text-lg font-semibold"
        onClick={handleLoginClick}
      >
        Realizar Login
      </Button>
    </div>
  );
};

export default LoginUserOrders;
