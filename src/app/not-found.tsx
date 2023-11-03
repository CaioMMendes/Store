import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <p className="text-xl font-semibold">Pagina não encontrada</p>
      <Link href={"/"}>
        <Button /* variant={"outline"} */ className="text-base">
          Voltar ao início
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
