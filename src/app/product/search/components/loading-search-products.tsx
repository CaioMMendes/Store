import LoadingInputSearch from "@/components/loading-input-search";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSearchProduct = () => {
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <LoadingInputSearch />
      <div className="grid !w-full !max-w-6xl grid-cols-2 gap-x-2 gap-y-3">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Skeleton key={index} className="  w-full  rounded-lg bg-accent">
              <Skeleton className=" flex cursor-pointer flex-col gap-4 bg-accent">
                <Skeleton className="relative flex h-40  flex-col items-center justify-center rounded-lg bg-accent ">
                  <Skeleton className="absolute left-2.5 top-2.5 flex items-center justify-start rounded-full bg-zinc-800 px-1.5">
                    <Skeleton className="h-6 w-4 bg-zinc-800" />
                    <Skeleton className="w-10"></Skeleton>
                  </Skeleton>

                  <Skeleton className="h-auto max-h-[75%] w-auto max-w-[90%] flex-1" />
                </Skeleton>
                <Skeleton className="flex flex-col">
                  <Skeleton className="w-20 overflow-hidden text-ellipsis whitespace-nowrap "></Skeleton>
                  <Skeleton className="flex items-center justify-start gap-2 ">
                    <Skeleton className="w-14 text-sm font-semibold"></Skeleton>

                    <Skeleton className="w-10 text-xs line-through opacity-75"></Skeleton>
                  </Skeleton>
                </Skeleton>
              </Skeleton>
            </Skeleton>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingSearchProduct;
