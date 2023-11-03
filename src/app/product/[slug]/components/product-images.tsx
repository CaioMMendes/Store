"use client";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductImageSlider from "./product-image-slider";

interface ProductImageProps {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: ProductImageProps) => {
  //   const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  //   const handleSelectCurrentImage = (imageUrl: string, index: number) => {
  //     setCurrentImage(imageUrl);
  //     setCurrentSlide(index);
  //   };
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className=" flex select-none flex-col gap-4">
      <ProductImageSlider
        imageUrls={imageUrls}
        name={name}
        loaded={loaded}
        currentSlide={currentSlide}
        sliderRef={sliderRef}
        instanceRef={instanceRef}
      />
      <div className="flex w-full justify-between gap-3 px-5">
        {imageUrls.map((imageUrl, index) => {
          return (
            <button
              onClick={() => instanceRef.current?.moveToIdx(index)}
              key={uuidv4()}
              className={`${
                index === currentSlide && "border border-solid border-primary"
              } min-h-20 flex h-20 w-full items-center justify-center rounded-lg bg-accent`}
            >
              <Image
                src={imageUrl}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[75%] w-auto max-w-[90%]"
                style={{
                  objectFit: "contain",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
