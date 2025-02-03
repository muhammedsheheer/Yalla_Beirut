import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Passion: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#161616] px-4 py-12 lg:h-screen">
      <div className="absolute inset-0 hidden items-center justify-center lg:flex">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-almarose mt-20 text-center text-3xl font-[700] capitalize text-[#FA771F] lg:text-7xl">
            PASSION & <br /> TRADITION
          </h1>
          <div>
            <Link href={""}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#fff] px-6 py-6 text-center font-inter text-sm font-[600] uppercase tracking-[1px] text-[#000]">
                View Menu <ArrowRight className="w-4 text-[#000]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-16 top-16 hidden lg:block">
        <Image
          src={"/images/home/passion/image1.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute left-[600px] top-12 hidden lg:block">
        <Image
          src={"/images/home/passion/image2.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[150px] w-full object-cover"
        />
      </div>
      <div className="absolute right-16 top-16 hidden lg:block">
        <Image
          src={"/images/home/passion/image3.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-28 hidden lg:block">
        <Image
          src={"/images/home/passion/image4.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-28 hidden lg:block">
        <Image
          src={"/images/home/passion/image5.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:hidden">
        <h1 className="font-almarose text-center text-3xl font-[700] capitalize text-[#FA771F] lg:text-6xl">
          PASSION & <br /> TRADITION
        </h1>
        <div>
          <Link href={""}>
            <Button className="flex flex-row gap-2 rounded-full bg-[#fff] px-6 py-6 text-center font-inter text-sm font-[600] capitalize tracking-[1px] text-[#000]">
              Book Now <ArrowRight className="w-4 text-[#000]" />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 px-6">
          <Image
            src={"/images/home/passion/image1.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-[250px] w-full object-cover"
          />
          <Image
            src={"/images/home/passion/image2.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-[250px] w-full object-cover"
          />
          <Image
            src={"/images/home/passion/image3.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-[250px] w-full object-cover"
          />
          <Image
            src={"/images/home/passion/image4.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-[250px] w-full object-cover"
          />
          <Image
            src={"/images/home/passion/image5.png"}
            width={468}
            height={166}
            alt="bg"
            className="h-[250px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Passion;
