import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center px-4 sm:px-[10px] md:px-[50px] lg:px-[80px] 2xl:px-[140px]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/video/bg.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative flex flex-col items-center justify-center gap-4 lg:gap-6">
        <h2 className="font-almarose text-center text-2xl font-[900] uppercase text-[#FFF4E3] lg:text-5xl lg:leading-[60px]">
          Experience the <br /> Authentic Flavors of <br /> Lebanese Cuisine
        </h2>

        <div>
          <Link href={"/table-booking"}>
            <Button className="flex flex-row gap-2 rounded-full bg-[#FA771F] px-9 py-7 font-jost text-xs font-[400] uppercase text-[#fff] lg:text-base">
              View Menu <ArrowRight className="w-4 text-[#fff]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
