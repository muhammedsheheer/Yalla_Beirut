"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".review-head");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    gsap.to(".review-underline", {
      scrollTrigger: {
        trigger: ".review-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full bg-[#0B1D37] px-4 pb-8 md:px-0">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-24">
        <div className="flex h-full w-full flex-col items-start justify-center gap-2 lg:gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:mb-8">
            <h1
              className="review-head w-full text-center font-playfair text-3xl font-[400] text-[#d5a859] lg:text-5xl"
              style={{ fontVariant: "small-caps" }}
            >
              Hear Our Guests
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-2xl border border-[#d5a859] bg-transparent px-6 py-6 md:basis-1/3 lg:gap-16"
                  >
                    <div className="flex w-full flex-row gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={60}
                        height={60}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col justify-center gap-0">
                        <p className="text-center font-inter text-base font-[400] tracking-[0.80px] text-[#D5A859]">
                          {review.author_name}
                        </p>
                        <span className="font-inter text-sm font-[300] tracking-[0.60px] text-[#D5A859]">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex w-full">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#d5a859]"
                            />
                          ),
                        )}
                      </div>
                      <div className="">
                        <p className="line-clamp-5 font-inter text-sm font-[400] tracking-[0.32px] text-[#D5A859] lg:text-base">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-16 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-6 transition-transform duration-300 ease-in-out lg:pb-0">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
