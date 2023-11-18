import Image, { ImageProps } from "next/image";

const DealsBannerLarge = ({ src, alt }: ImageProps) => {
  return (
    <div>
      <div className="hidden  w-full md:flex  ">
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

export default DealsBannerLarge;
