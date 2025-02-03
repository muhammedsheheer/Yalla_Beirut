import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center lg:py-20"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#F7F4ED] lg:text-6xl">
                Welcome to
                <br /> Lavita - Where
                <br /> Every Bite is an
                <br /> Art Form
              </h1>
              <p className="font-manrope font-normal text-[#F7F4ED]">
                Experience the essence of fine dining at LaVita. Every dish is a
                masterpiece, crafted with passion and precision. From rich
                flavors to elegant presentation, indulge in an unforgettable
                culinary journey. At LaVita, we don` t just serve food—we create
                experiences.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/home/reserve/image.png"
              width={951}
              height={975}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
