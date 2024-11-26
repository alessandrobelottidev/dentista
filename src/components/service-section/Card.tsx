"use client";
import Image from "next/image";
import { cardData } from "./card.interface";
import { useScrollAnimation } from "@src/hooks/useScrollAnimation";
import { Button } from "../ui/button";
import { useHomeContext } from "@src/app/(homepage)/HomeContext";

export const Card = ({
  cardData,
  delay,
}: {
  cardData: cardData;
  delay: number;
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { refs: _, scrollToSection } = useHomeContext();

  return (
    <div
      ref={elementRef}
      className={`bg-white shadow-lg rounded-2xl overflow-hidden flex-grow-0 flex-shrink-0 basis-[100%] md:basis-[48.5%] lg:basis-[30%] h-max mb-[3%] delay-${delay}
        ${
          isVisible
            ? `animate-in fade-in slide-in-from-bottom-40 duration-700`
            : "opacity-0"
        }
        `}
    >
      <Image
        src={cardData.image}
        alt={`Imaggine di: ${cardData.title}`}
        placeholder="blur"
        className="w-full h-auto object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{cardData.title}</h3>
        <p className="font-light text-lg mb-4">{cardData.description}</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-semibold">
            <span className="pr-2">da</span>
            <span className="font-semibold text-2xl text-figmaWaterGreen">
              €{cardData.startingPrice.toLocaleString()}
            </span>
          </p>
          <Button
            variant={"accent"}
            size={"figmaSmall"}
            onClick={() => {
              // Nothing statewise changes with this button
              // setGlobalState((prev) => ({ ...prev }));
              scrollToSection("form");
            }}
          >
            Prenota
          </Button>
        </div>
      </div>
    </div>
  );
};
