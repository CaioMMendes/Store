import { Skeleton } from "@/components/ui/skeleton";

const LoadingProductImages = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="flex h-96 w-full items-center justify-center bg-accent">
        <Skeleton
          className="h-auto max-h-[75%] w-auto max-w-[90%]"
          style={{
            objectFit: "contain",
          }}
        />
      </Skeleton>
      <div className="flex h-full w-full justify-between gap-3  px-5">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-20  w-full  rounded-lg bg-accent"
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 px-5 py-2">
        <div className="flex  flex-col gap-1">
          <Skeleton className="h-6 w-40 bg-accent "></Skeleton>
          <Skeleton className="h-7 w-52 bg-accent  "></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductImages;
