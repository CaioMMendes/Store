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
    </div>
  );
};

export default LoadingProductImages;
