"use client";
import { useScrollAnimation } from "@src/hooks/useScrollAnimation";
import Image from "next/image";
import CofidisLogo from "../../../public/logos/cofidisLogo.svg";
import CompassLogo from "../../../public/logos/compassLogo.svg";
import { Button } from "../ui/button";
import { useHomeContext } from "@src/hooks/useHomeContext";

export const Agevolazioni = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { refs: _, scrollToSection } = useHomeContext();

  return (
    <div
      ref={elementRef}
      className={`bg-white shadow-lg rounded-2xl overflow-hidden flex-grow-0 flex-shrink-0 basis-[100%] md:basis-[48.5%] lg:basis-[30%] h-max p-6 ${
        isVisible
          ? `animate-in fade-in slide-in-from-bottom-40 duration-700`
          : "opacity-0"
      }`}
    >
      <p className="font-medium pb-2">Agevolazioni disponibili tramite:</p>
      <div className="flex flex-row items-center gap-4 pb-4">
        <Image
          src={CompassLogo}
          alt={"Compass logo"}
          className="size-1/2 max-w-36"
        />
        <Image
          src={CofidisLogo}
          alt={"Cofidis logo"}
          className="size-1/2 max-w-28"
        />
      </div>
      <Button
        variant={"default"}
        size={"figmaFull"}
        onClick={() => scrollToSection("form")}
      >
        Richiedi appuntamento
      </Button>
    </div>
  );
};
