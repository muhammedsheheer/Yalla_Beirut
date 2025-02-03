import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#E76100] py-12 lg:py-24">
      <div className="flex flex-col gap-8 lg:gap-10">
        <h2 className="font-almarose text-center text-4xl font-[700] uppercase text-[#DDD1BD] lg:text-6xl">
          Scroll Our Story
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-6">
          <Image
            src={"/images/home/follow/image1.png"}
            width={606}
            height={723}
            alt="image"
            className="hidden h-[300px] w-full object-contain lg:block lg:h-[600px] lg:w-[15%] lg:object-cover"
          />
          <Image
            src={"/images/home/follow/image2.png"}
            width={606}
            height={723}
            alt="image"
            className="h-[300px] w-full object-contain lg:h-[600px] lg:w-[35%] lg:object-cover"
          />
          <Image
            src={"/images/home/follow/image3.png"}
            width={606}
            height={723}
            alt="image"
            className="h-[300px] w-full object-contain lg:h-[600px] lg:w-[35%] lg:object-cover"
          />
          <div className="w-full lg:w-[15%]">
            <Image
              src={"/images/home/follow/image4.png"}
              width={606}
              height={723}
              alt="image"
              className="hidden h-[300px] w-full rounded-bl-2xl rounded-tl-2xl object-contain lg:block lg:h-[600px] lg:object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 lg:gap-10">
          <Image
            src={"/images/home/follow/lvl.png"}
            width={101}
            height={101}
            alt="lvl"
            className="w-10 lg:w-16"
          />
          <div>
            <Link
              className="font-almarose rounded-full bg-transparent px-8 py-5 text-center text-sm font-[400] text-[#DDD1BD] ring-1 ring-[#DDD1BD] lg:px-12 lg:py-6 lg:text-2xl"
              href=""
              target="_blank"
            >
              @yallabeirut2
            </Link>
          </div>
          <Image
            src={"/images/home/follow/lvr.png"}
            width={101}
            height={101}
            alt="lvl"
            className="w-10 lg:w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
