"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#E76100]">
      <div className="absolute bottom-24 right-24 hidden lg:block">
        <p className="w-full max-w-[300px] px-4 font-inter text-sm font-[400] text-[#000] lg:text-base">
          Immerse yourself in the rich aroma of Lebanese spices and flavors, and
          soon, you`ll feel as if you`re in the heart of Beirut.
        </p>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="relative flex w-full flex-col items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-almarose text-center text-4xl font-[700] text-[#ECE6D6] lg:text-5xl">
              YELLA SPECIALS
            </h1>
          </div>
          <div className="lg:hidden">
            <p className="w-full max-w-[400px] px-4 text-center font-inter text-sm font-[400] text-[#000] lg:text-base">
              Immerse yourself in the rich aroma of Lebanese spices and flavors,
              and soon, you`ll feel as if you`re in the heart of Beirut.
            </p>
          </div>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
