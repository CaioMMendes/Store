import { HandleTheme } from "@/components/handleTheme";
import Image from "next/image";
import Categories from "./components/categories";
import DealsList from "../../components/lists/deals-list";
import List from "@/components/lists/list";
import PromoBanner from "./components/promo-banner";

export default function Home() {
  return (
    <main className=" mt-3 flex flex-col ">
      <PromoBanner
        src="/banners/banner-55off.png"
        alt="Até 55% de desconto este mês"
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <Categories />
        <DealsList />
      </div>
      <PromoBanner
        src="/banners/banner-mouses.png"
        alt="Até 55% de desconto em mouses"
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <List product={"mouses"} />
      </div>
      <PromoBanner
        src={"/banners/banner-fones.png"}
        alt={"Até 20% de desconto em fones"}
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <List product={"keyboards"} />
        <List product={"headphones"} />
        <List product={"monitors"} />
        <List product={"speakers"} />
        <List product={"mousepads"} />
      </div>
    </main>
  );
}
