import Image, { ImageProps } from "next/image";

const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
    />
  );
};

export default PromoBanner;
