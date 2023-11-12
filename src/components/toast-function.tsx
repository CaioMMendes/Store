"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ToastAction } from "./ui/toast";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface ToastFunctionProps {
  title: string;
  name: string;
  router: AppRouterInstance;
}

const ToastFunction = ({ title, name, router }: ToastFunctionProps) => {
  console.log(title, name);

  return toast({
    className: "bg-primary !bottom-0",
    title: title,
    duration: 2000,

    action: (
      <ToastAction onClick={() => router.push("/cart")} altText="Carrinho">
        {name}
      </ToastAction>
    ),
  });
};

export default ToastFunction;
