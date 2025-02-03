import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#D5A859]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 py-4 lg:py-16">
        <h2 className="font-oswald text-center text-8xl text-[#262626] md:left-[15%] md:text-8xl">
          The Lavita
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#D5A859] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/home/our/image.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#0B1D37] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#0B1D37] md:text-start">
              What started as a shared vision soon became a haven for food
              lovers. In 2015, the founders of LaVita set out with a simple yet
              ambitious goal: to create a space where every meal is more than
              just dining—it`s an experience. With a deep-rooted passion for
              culinary artistry and a commitment to quality, LaVita quickly
              evolved from a small neighborhood cafe into a beloved destination
              for those who appreciate exceptional flavors.
              <br />
              <br />
              Every dish, thoughtfully crafted and beautifully presented,
              reflects our dedication to authenticity and excellence. And while
              we’ve grown over the years, our mission remains unchanged—to bring
              people together through the joy of great food, warm hospitality,
              and unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
