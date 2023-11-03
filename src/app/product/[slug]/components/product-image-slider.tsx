import {
  KeenSliderHooks,
  KeenSliderInstance,
  useKeenSlider,
} from "keen-slider/react";
import Image from "next/image";
import { MutableRefObject } from "react";

interface ProductImageSliderProps {
  imageUrls: string[];
  name: string;
  loaded: boolean;
  currentSlide: number;
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>;
  sliderRef: (node: HTMLDivElement | null) => void;
}

const ProductImageSlider = ({
  imageUrls,
  name,
  loaded,
  currentSlide,
  instanceRef,
  sliderRef,
}: ProductImageSliderProps) => {
  return (
    <>
      <div className="navigation-wrapper relative ">
        <div ref={sliderRef} className="keen-slider ">
          {imageUrls.map((image, index) => (
            <div
              className={`keen-slider__slide  flex h-96 w-full items-center justify-center bg-accent`}
              key={`${image}${index}`}
            >
              <Image
                src={image}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className=" h-auto max-h-[75%] w-auto max-w-[90%]"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <div className={`${currentSlide === 0 && "opacity-10"}  `}>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
            <div
              className={`  opacity-90 ${
                currentSlide === imageUrls.length - 1 && "!opacity-20"
              }`}
            >
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? "fill-whiteTransparent" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`absolute top-1/2 z-20 h-full w-12 -translate-y-1/2 transform  cursor-pointer fill-gray-100 px-2 ${
        props.left ? "left-1" : "left-auto right-1"
      } ${disabled}`}
      //   xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default ProductImageSlider;
