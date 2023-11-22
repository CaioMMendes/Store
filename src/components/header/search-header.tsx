import Link from "next/link";
import SearchProduct from "../search-product";
import { Button } from "../ui/button";
import DropDownCatalog from "../dropdown-catalog";

const SearchHeader = () => {
  return (
    <div className="hidden gap-3 px-5 pt-1 md:flex">
      <Link href={"/catalog/"}>
        <Button variant={"outline"}>Catálogo</Button>
      </Link>
      <Link href={"/category/deals/"}>
        <Button variant={"outline"}>Ofertas</Button>
      </Link>
      <div className="flex flex-1 ">
        <SearchProduct />
      </div>
    </div>
  );
};

export default SearchHeader;
