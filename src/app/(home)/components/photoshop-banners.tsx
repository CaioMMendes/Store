import Image, { ImageProps } from "next/image";

const PhotoshopBanner = ({ src, alt }: ImageProps) => {
  return (
    <div className="flex w-full md:px-5">
      <div className="flex w-full rounded-lg bg-gradient-to-r from-[#2e3133] to-[#161718] md:h-36  ">
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
    </div>
  );
};

export default PhotoshopBanner;
