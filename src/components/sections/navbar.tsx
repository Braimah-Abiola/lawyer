"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Wrapper from "../wrapper/wrapper";

import { useEffect, useState } from "react";
import { NavItems } from "../ui/nav-items";
import { Separator } from "../ui/separator";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 10;

      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full  sticky top-0 z-[999999] ${
        isScrolled ? " bg-white grainy pt-2 pb-1  " : " bg-transparent py-2"
      }`}
      id="home"
    >
      <Wrapper className="flex flex-row justify-between items-center">
        <Link href="/">
          <div className=" relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
            <Image
              fill
              src="/logo.png"
              className=" object-contain object-center"
              alt="Logo"
            />
          </div>
        </Link>

        <div className="hidden lg:block">
          <div className="flex flex-row items-center gap-10 2xl:gap-16">
            <NavItems />
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="text-lg font-semibold underline underline-offset-8 text-[#C69043]">
            Email Us
          </h2>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="primary-button-small-backdrop px-5 xl:p-[3px] rounded-[14px] ">
                <div className="primary-button-small aspect-square font-satoshi font-medium rounded-[12px] px-2.5 py-2.5">
                  <Image
                    width={28}
                    height={8}
                    src="/img/menu.svg"
                    alt="Menu icon"
                  />
                </div>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="z-[999999]">
              <SheetClose asChild>
                <Link href="/">
                  <div className=" relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
                    <Image
                      fill
                      src="/logo.png"
                      className=" object-contain object-center"
                      alt="Logo"
                    />
                  </div>
                </Link>
              </SheetClose>
              <div className="w-full flex flex-col items-start justify-start mt-10">
                <div className="text-black uppercase font-medium font-satoshi text-lg flex flex-col items-start">
                  <SheetClose asChild>
                    <Link href="/">
                      <h4 className="mt-6">Home</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#about-us">
                      <h4 className="mt-6">About Us</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#services">
                      <h4 className="mt-6">Services</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#faq">
                      <h4 className="mt-6">FAQs</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#case-studies">
                      <h4 className="mt-6">Case Studies</h4>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Wrapper>
      <Wrapper className="mt-0">
        <Separator className="w-full" />
      </Wrapper>
    </div>
  );
};

export default Navbar;
