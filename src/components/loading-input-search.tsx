import { Skeleton } from "./ui/skeleton";

const LoadingInputSearch = () => {
  return (
    <div>
      <Skeleton className="ex h-9 w-full rounded-md border bg-accent  px-3 py-1 text-sm shadow-sm " />
    </div>
  );
};

export default LoadingInputSearch;
