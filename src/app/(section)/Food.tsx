import Image from "next/image";
import React from "react";

const Food: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#161616] px-4 py-12 lg:h-screen">
      <div className="absolute left-[420px] top-[200px] z-10 hidden lg:block">
        <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-5xl lg:tracking-[14px]">
          Chicken Shawarma{" "}
        </h1>
      </div>
      <div className="absolute left-[300px] top-[280px] z-10 hidden lg:block">
        <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-5xl lg:tracking-[14px]">
          Falafel Burger
        </h1>
      </div>
      <div className="absolute right-[280px] top-[360px] z-10 hidden lg:block">
        <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-5xl lg:tracking-[14px]">
          Lamb KEBBEH
        </h1>
      </div>
      <div className="absolute left-[350px] top-[440px] z-10 hidden lg:block">
        <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-5xl lg:tracking-[14px]">
          Cheese Rikakats
        </h1>
      </div>
      <div className="absolute bottom-20 left-36 hidden lg:block">
        <Image
          src={"/images/home/food/image.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-36 hidden lg:block">
        <Image
          src={"/images/home/food/image1.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="absolute right-36 top-12 hidden lg:block">
        <Image
          src={"/images/home/food/image1.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 lg:hidden">
        <div className="flex flex-col gap-1">
          <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-4xl lg:tracking-[10px]">
            Chicken Shawarma{" "}
          </h1>
          <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-4xl lg:tracking-[10px]">
            Falafel Burger{" "}
          </h1>
          <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-4xl lg:tracking-[10px]">
            Lamb KEBBEH{" "}
          </h1>
          <h1 className="font-almarose text-center text-3xl font-[700] uppercase tracking-[2px] text-[#DDD1BD] lg:text-4xl lg:tracking-[10px]">
            Cheese Rikakats{" "}
          </h1>
        </div>
        <Image
          src={"/images/home/food/image.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
        <Image
          src={"/images/home/food/image1.png"}
          width={468}
          height={166}
          alt="bg"
          className="h-[250px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Food;
