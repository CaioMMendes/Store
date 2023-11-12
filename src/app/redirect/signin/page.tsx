"use client";

import { DataUser } from "@/app/product/[slug]/components/product-details";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const RedirectSigninPage = () => {
  const { data, status } = useSession();
  const searchParams = useSearchParams();
  const dataUser = data as { user: DataUser };
  const router = useRouter();
  const pathname = searchParams.get("pathname");
  if (dataUser?.user?.id === undefined || status !== "authenticated") {
    return pathname ? router.push(pathname) : router.push("/");
  } else {
    //pega os dados do localstorage e manda pro banco
    return pathname ? router.push(pathname) : router.push("/");
  }
};

export default RedirectSigninPage;
