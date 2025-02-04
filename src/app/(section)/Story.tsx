import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const images = [
  "/images/home/follow/image3.png",
  "/images/home/follow/image2.png",
  "/images/home/follow/image3.png",
  "/images/home/follow/image2.png",
  "/images/home/follow/image3.png",
  "/images/home/follow/image2.png",
  "/images/home/follow/image3.png",
  "/images/home/follow/image2.png",
];

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const imageWidth = container.firstChild
        ? (container.firstChild as HTMLElement).clientWidth + 16
        : 0;

      container.scrollBy({
        left: direction === "next" ? imageWidth : -imageWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#E76100] py-12 lg:py-24">
      <div className="flex flex-col gap-8 lg:gap-10">
        <h2 className="text-center text-4xl font-bold uppercase text-[#DDD1BD] lg:text-6xl">
          Scroll Our Story
        </h2>

        <div className="relative w-full overflow-hidden px-4">
          <div
            ref={containerRef}
            className="custom-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[90%] flex-shrink-0 sm:w-[100%] md:w-[48%] lg:w-[24%]"
              >
                <Image
                  src={image}
                  width={600}
                  height={800}
                  alt={`Story image ${index}`}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 lg:gap-10">
          <Image
            src="/images/home/follow/lvl.png"
            width={101}
            height={101}
            alt="Previous"
            className="w-10 cursor-pointer lg:w-16"
            onClick={() => scroll("prev")}
          />
          <Link
            className="rounded-full px-8 py-5 text-center text-sm font-bold text-[#DDD1BD] ring-1 ring-[#DDD1BD] lg:px-12 lg:py-6 lg:text-2xl"
            href="https://www.instagram.com/yallabeirut2/"
            target="_blank"
          >
            @yallabeirut2
          </Link>
          <Image
            src="/images/home/follow/lvr.png"
            width={101}
            height={101}
            alt="Next"
            className="w-10 cursor-pointer lg:w-16"
            onClick={() => scroll("next")}
          />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Story;
