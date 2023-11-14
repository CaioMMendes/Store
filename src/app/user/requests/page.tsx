"use client";

import { DataProps } from "@/app/cart/components/cart-content";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import LoginUserRequests from "./components/login";

const UserRequestsPage = () => {
  const { data, status } = useSession();
  const dataUser = data as DataProps;
  const router = useRouter();
  if (status === "loading") {
    return <div className="p-5">Loading...</div>;
  } else if (status === "unauthenticated") {
    return <LoginUserRequests />;
  } else if (status === "authenticated") {
    return <div className="p-5">Meus pedidos</div>;
  }
};

export default UserRequestsPage;
