import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#161616] px-4 py-12 lg:px-[80px] lg:py-20">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex w-full flex-col gap-4 lg:ml-40 lg:w-[50%] lg:gap-7">
          <h1 className="font-almarose text-3xl font-[700] uppercase text-[#ECE6D6] lg:text-5xl">
            Reserve Your <br />
            Table at Yella <br /> beirut
          </h1>
          <p className="w-full max-w-[390px] font-inter font-[400] text-[#DDD1BD]">
            Experience the magic of Lebanese cuisine in a warm and inviting
            setting. Whether it’s a family gathering, a romantic dinner, or a
            casual meet-up, we’ve got the perfect space for you.
          </p>
          <div>
            <Button className="flex flex-row gap-2 rounded-full bg-[#E76100] px-6 py-6 text-center font-inter text-sm font-[600] uppercase tracking-[1px] text-[#fff]">
              Book Now <ArrowRight className="w-4 text-white" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <Image
            src={"/images/home/reserve/image.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-full w-full object-cover lg:h-[580px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
