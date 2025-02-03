import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Discover: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#E76100] pb-12 pt-12 lg:pb-40 lg:pt-24">
      <div className="absolute bottom-0 left-0 w-[49%]">
        <Image
          src={"/images/home/discover/left.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[40px] w-full lg:h-[80px]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[49%]">
        <Image
          src={"/images/home/discover/right.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[40px] w-full lg:h-[80px]"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div>
          <h1 className="font-almarose text-center text-3xl font-[900] capitalize text-[#1C1C1B] lg:text-5xl">
            DISCOVER <br /> AUTHENTIC TASTE
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <Image
            src={"/images/home/discover/image1.png"}
            width={468}
            height={166}
            alt="bg"
            className="w-full lg:w-[40%]"
          />
          <div className="flex w-full flex-col items-center gap-4 lg:w-[25%] lg:items-start lg:justify-center lg:gap-8">
            <p className="w-full max-w-[300px] font-inter text-sm font-[400] text-[#000] lg:text-base">
              Welcome to Yalla Beirut, where every dish tells a story of
              Lebanon’s rich culinary heritage. Nestled in the heart of Tower
              Hill, we bring you the soulful flavors of Beirut with an authentic
              selection of grilled meats, aromatic mezze, and handcrafted
              delicacies. Our chefs stay true to tradition, using only the
              finest ingredients to create a dining experience that feels like
              home. Whether you`re here for a quick bite or a lavish feast,
              expect warm hospitality, vibrant flavors, and a true taste of
              Lebanon.
            </p>
            <div>
              <Button className="flex flex-row gap-2 rounded-full bg-[#fff] px-6 py-7 text-center font-inter font-[600] uppercase tracking-[1px] text-[#000]">
                Book Table <ArrowRight className="w-4 text-[#000]" />
              </Button>
            </div>
          </div>

          <Image
            src={"/images/home/discover/image2.png"}
            width={468}
            height={166}
            alt="bg"
            className="w-full lg:h-[350px] lg:w-[35%]"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Discover;
