import { Separator } from "../../../components/ui/separator";

interface CartDetailsLineProps {
  text: string;
  value: string | number;
}

const CartDetailsLine = ({ text, value }: CartDetailsLineProps) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        text === "Descontos" && value === `- R$ ${0}` && "hidden"
      }`}
    >
      <Separator />
      <div className="flex items-center justify-between">
        <p className={`${text === "Total" && "font-bold"}`}>{text}</p>
        <p className={`${text === "Total" && "font-bold"}`}>{value}</p>
      </div>
    </div>
  );
};

export default CartDetailsLine;
