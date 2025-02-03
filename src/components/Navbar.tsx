import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./SideBar";

import { Button } from "@/components/ui/button";

interface NavbarProps {
  position?: "static" | "fixed" | "absolute";
}

const Navbar: React.FC<NavbarProps> = ({ position = "static" }) => {
  return (
    <section
      className={`${position} top-5 z-50 flex h-[10vh] w-full items-center bg-transparent px-2 py-2 transition-all duration-300 ease-in-out lg:px-[80px]`}
    >
      <div className="flex w-full flex-col gap-0">
        <div className="flex w-full flex-row items-center justify-between px-4 md:px-10">
          <div className="">
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={275}
                height={93}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div className="hidden w-full flex-row justify-center gap-20 bg-transparent py-3 pl-20 pr-6 lg:flex">
            <Link
              className="font-manrope text-center text-base font-[600] uppercase tracking-[0.96px] text-[#fff]"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="font-manrope text-center text-base font-[600] uppercase tracking-[0.96px] text-[#fff]"
              href={""}
            >
              Menu
            </Link>
            <Link
              className="font-manrope text-center text-base font-[600] uppercase tracking-[0.96px] text-[#fff]"
              href={""}
            >
              About
            </Link>
            <Link
              className="font-manrope text-center text-base font-[600] uppercase tracking-[0.96px] text-[#fff]"
              href={""}
            >
              Contact
            </Link>
          </div>

          <div className="lg:hidden">
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>
          </div>
          <div className="hidden lg:block">
            <Link href={""}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#fff] px-5 py-6 font-inter text-sm font-[600] uppercase tracking-[1.2px] text-[#FA771F]">
                Book Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
