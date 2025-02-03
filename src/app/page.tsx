"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import Story from "./(section)/Story";
import Discover from "./(section)/Discover";
import Food from "./(section)/Food";
import Passion from "./(section)/Passion";
import Reserve from "./(section)/Reserve";
import { useEffect, useState } from "react";
import ViewMenu from "@/components/floating-buttons/ViewMenu";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Discover />
        <Food />
        <Special />
        <Passion />
        <Reserve />
        <Reviews />
        <Story />
        <Footer />
      </div>
      {isScrolled && (
        <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
          <ViewMenu />
        </div>
      )}
    </main>
  );
}
