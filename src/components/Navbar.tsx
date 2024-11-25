"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import logo from "../../public/logos/logo.png";
import Image from "next/image";

const Navbar = ({ heroHeight }: { heroHeight: number }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    console.log(heroHeight);

    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > heroHeight);
      console.log(heroHeight);
    };
    // window.innerHeight - 60

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);

  const navLinks = [
    { name: "No al turismo dentale", href: "#hero" },
    { name: "Chi siamo", href: "#studio" },
    { name: "Servizi", href: "#services" },
    { name: "Sbiancamento dentale", href: "#sbiancamento" },
    { name: "Paura del dentista?", href: "#paura" },
  ];

  return (
    <header
      className={`
      flex h-16 w-full shrink-0 md:px-6 justify-center
      transition-all duration-300 ease-in-out bg-figmaDarkWater
      ${isSticky ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""}
    `}
    >
      <div className="max-w-7xl w-full flex flex-row items-center justify-between px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="link"
              size="maxContent"
              className={`lg:hidden text-white`}
            >
              <MenuIcon style={{ height: "24px", width: "24px" }} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-figmaDarkWater border-0 text-white rounded-r-xl"
          >
            <Link href="/" className="" prefetch={false}>
              <Image priority src={logo} alt="Logo" height={50} width={50} />
              <span className="sr-only">No al turismo dentale!</span>
            </Link>
            <div className="grid gap-2 py-6">
              {navLinks.map((el, key) => (
                <Link
                  href={el.href}
                  key={key}
                  className="flex w-full items-center py-2 text-base font-base"
                  prefetch={false}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href={"#form"}
          className={`
            lg:hidden group inline-flex h-9 w-max items-center justify-center py-2 px-3 
            duration-300 text-sm font-medium transition-colors focus:outline-none 
            disabled:pointer-events-none disabled:opacity-50 
            data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
            gap-2 border rounded-full
            text-white border-white hover:bg-white hover:text-figmaText
          `}
          prefetch={false}
        >
          <Calendar />
          Prenota appuntamento
        </Link>
        <Link href="/" className="mr-6 w-max hidden lg:flex" prefetch={false}>
          <Image priority src={logo} alt="Logo" height={50} width={50} />
          <span className="sr-only">No al turismo dentale!</span>
        </Link>
        <nav className="hidden lg:flex gap-6 w-max">
          {navLinks.map((el, key) => (
            <Link
              href={el.href}
              key={key}
              className={`
                group inline-flex h-9 w-max items-center justify-center py-1 px-1 
                text-sm font-medium transition-colors focus:outline-none 
                disabled:pointer-events-none disabled:opacity-50 
                data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50
                text-white
              `}
              prefetch={false}
            >
              {el.name}
            </Link>
          ))}
          <Link
            href={"#form"}
            className={`
              group inline-flex h-9 w-max items-center justify-center py-2 px-3 
              duration-300 text-sm font-medium transition-colors focus:outline-none 
              disabled:pointer-events-none disabled:opacity-50 
              data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
              gap-2 border rounded-full
              text-white border-white hover:bg-white hover:text-figmaText
            `}
            prefetch={false}
          >
            <Calendar />
            Prenota appuntamento
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
