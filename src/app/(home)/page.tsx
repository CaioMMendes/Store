import { HandleTheme } from "@/components/handleTheme";
import Image from "next/image";
import Categories from "./components/categories";
import DealsList from "./components/deals-list";

export default function Home() {
  return (
    <main className=" mt-8 flex flex-col ">
      <Image
        src="/Banner.png"
        alt="Até 55% de desconto este mês"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <Categories />
        <DealsList />
      </div>
    </main>
  );
}
