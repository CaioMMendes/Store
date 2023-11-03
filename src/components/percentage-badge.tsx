import { ArrowDown } from "lucide-react";

const PercentageBadge = ({
  discountPercentage,
  absolute,
}: {
  discountPercentage: number;
  absolute?: boolean;
}) => {
  return (
    <>
      {discountPercentage > 0 && (
        <div
          className={`${
            absolute && "absolute"
          } left-2.5 top-2.5 flex items-center justify-start rounded-full bg-primary px-1.5`}
        >
          <ArrowDown width={17} height={24} />
          <p>{discountPercentage}%</p>
        </div>
      )}
    </>
  );
};

export default PercentageBadge;
