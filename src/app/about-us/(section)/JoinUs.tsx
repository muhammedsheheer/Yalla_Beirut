import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px] text-[#F7F4ED]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#F7F4ED]">
            Ready to experience the finest flavors at LaVita? Whether you`re
            enjoying an intimate dinner or gathering for a special occasion, we
            invite you to savor the artistry behind every dish. Join us and
            discover what makes dining at LaVita an experience to remember.
          </p>
          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent px-7 py-7 font-semibold uppercase text-[#F7F4ED] hover:bg-primary"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
