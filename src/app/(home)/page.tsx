import List from "@/components/lists/list";
import SearchProduct from "@/components/search-product";
import DealsList from "../../components/lists/deals-list";
import Categories from "./components/categories";
import PhotoshopBanner from "./components/photoshop-banners";
import PromoBanner from "./components/promo-banner";
import DealsBannerLarge from "./components/deals-banner-large";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" mt-3 flex flex-col ">
      <span className="md:hidden">
        <SearchProduct />
      </span>
      <DealsBannerLarge
        src="/banners/banner-ofertas.png"
        alt="Até 55% de desconto este mês"
      />
      <PromoBanner
        src="/banners/banner-55off.png"
        alt="Até 55% de desconto este mês"
      />
      <div className="flex flex-col gap-8 px-5 py-8">
        <Categories />
        <DealsList />
      </div>
      <div className="flex flex-col gap-5  pb-8">
        <PhotoshopBanner
          src="/banners/banner-mouse.png"
          alt="Até 55% de desconto em mouses"
        />

        <List product={"mouses"} />
        <PhotoshopBanner
          src={"/banners/banner-teclado.png"}
          alt={"Até 25% de desconto em teclados"}
        />

        <List product={"keyboards"} />

        <PhotoshopBanner
          src={"/banners/banner-fone.png"}
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
