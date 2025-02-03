"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-[100vh] w-full lg:h-[80vh]">
      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-0">
        <div
          className="flex h-[50vh] w-full flex-col items-center justify-center gap-4 lg:h-[80vh] lg:w-[60%] lg:gap-6"
          style={{
            backgroundImage: "url(/images/home/footer/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h6
            className="font-almarose text-center text-base font-[700] tracking-[3px] text-[#fff] lg:text-lg"
            style={{ fontVariant: "small-caps" }}
          >
            Connect With Us
          </h6>
          <Image
            src={"/images/home/hero/logo.png"}
            width={468}
            height={166}
            alt="bg"
            className="w-20 lg:w-24"
          />
          <div className="flex flex-col lg:flex-row">
            <Link href={""} target="_blank">
              <span className="font-almarose text-center text-sm font-[700] text-[#fff] lg:text-base">
                GW59+WF London, United Kingdom
              </span>
            </Link>
            <Link
              className="text-center font-jost text-sm font-[300] text-[#fff] lg:text-base"
              href={"tel:+442080758976"}
            >
              +442080758976
            </Link>
          </div>
          <p className="font-almarose text-center text-sm font-[700] text-[#fff] lg:text-base">
            Opening hours: <br />
            Mon-Sat: 08:00 am – 05:00 pm <br />
            Sun: 09:00 am - 05:00 pm
          </p>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link href={""} target="_blank">
              <Icons.instagram className="text-white" />
            </Link>
            <Link href={""} target="_blank">
              <Icons.unknown className="text-white" />
            </Link>
            <Link href={""} target="_blank">
              <Icons.google className="text-white" />
            </Link>
          </div>
        </div>
        <div className="h-[50vh] w-full lg:h-[80vh] lg:w-[40%]">
          <iframe
            className="h-[50vh] w-full lg:h-[80vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.4943984110973!2d0.007398600000000001!3d51.632470299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a0849332bba7%3A0x57daf6e09d105c3!2sLa%20Vita%20Cafe%20Bistro!5e0!3m2!1sen!2sin!4v1738301403124!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
