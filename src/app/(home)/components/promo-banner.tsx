import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <div className="flex w-full md:hidden md:h-36">
      <Image
        src={src}
        alt={alt}
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default PromoBanner;
