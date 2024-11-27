import { Separator } from "./ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Separator />
      <div className="flex items-center justify-center bg-accent py-3 text-sm opacity-60">
        © {year} Copyright&nbsp; <span className="font-semibold"> Store</span>
      </div>
    </>
  );
};

export default Footer;
