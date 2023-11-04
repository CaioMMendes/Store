import Image, { ImageProps } from "next/image";

const PhotoshopBanner = ({ src, alt }: ImageProps) => {
  return (
    <div className="rounded-lg  bg-gradient-to-r from-[#2e3133] to-[#161718]  ">
      <Image
        src={src}
        alt={alt}
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
};

export default PhotoshopBanner;
