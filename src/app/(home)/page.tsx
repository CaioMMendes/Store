import { HandleTheme } from "@/components/handleTheme";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col p-5">
      <div>
        <Image
          src="/Banner.png"
          alt="Até 55% de desconto este mês"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
