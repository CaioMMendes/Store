import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <>
      <Separator />
      <div className="flex items-center justify-center bg-accent py-3 text-sm opacity-60">
        © 2023 Copyright&nbsp; <span className="font-semibold"> Store</span>
      </div>
    </>
  );
};

export default Footer;
