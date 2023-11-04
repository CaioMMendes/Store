import { HandleTheme } from "@/components/handleTheme";
import Image from "next/image";
import Categories from "./components/categories";
import DealsList from "../../components/lists/deals-list";
import List from "@/components/lists/list";
import PromoBanner from "./components/promo-banner";
import SearchProduct from "@/components/search-product";
import PhotoshopBanner from "./components/photoshop-banners";

export default function Home() {
  return (
    <main className=" mt-3 flex flex-col ">
      <SearchProduct />
      <PromoBanner
        src="/banners/banner-55off.png"
        alt="Até 55% de desconto este mês"
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <Categories />
        <DealsList />
      </div>
      <div className="flex flex-col gap-5  pb-8">
        <PromoBanner
          src="/banners/banner-mouses.png"
          alt="Até 55% de desconto em mouses"
        />

        <List product={"mouses"} />
        <PhotoshopBanner
          src={"/banners/banner-teclado.png"}
          alt={"Até 25% de desconto em teclados"}
        />

        <List product={"keyboards"} />

        <PromoBanner
          src={"/banners/banner-fones.png"}
          alt={"Até 20% de desconto em fones"}
        />
        <List product={"headphones"} />
        <PhotoshopBanner
          src={"/banners/banner-monitor.png"}
          alt={"Até 15% de desconto em monitor"}
        />

        <List product={"monitors"} />
        <PhotoshopBanner
          src={"/banners/banner-speakers.png"}
          alt={"Até 15% de desconto em Speakers"}
        />
        <List product={"speakers"} />
        <PhotoshopBanner
          src={"/banners/banner-mousepads.png"}
          alt={"Até 15% de desconto em Mousepads"}
        />
        <List product={"mousepads"} />
      </div>
    </main>
  );
}
