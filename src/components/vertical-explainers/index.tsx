"use client";
import { Section } from "../section";
import VerticalVideo from "../VerticalVideo";
import SbiancamentoPoster from "../../../public/videos/hls/vertical-explainers/sbiancamento/sbiancamento-poster.jpg";
import PauraDentistaPoster from "../../../public/videos/hls/vertical-explainers/paura-del-dentista/paura-del-dentista.jpg";
import { Button } from "../ui/button";
import { useScrollAnimation } from "@src/hooks/useScrollAnimation";
import { useHomeContext } from "@src/hooks/useHomeContext";

export const VerticalExplainers = () => {
  const { elementRef: dentistFearRef, isVisible: isDentistFearVisible } =
    useScrollAnimation();
  const { elementRef: cleaningRef, isVisible: isCleaningVisible } =
    useScrollAnimation();

  const { refs: _, scrollToSection } = useHomeContext();

  return (
    <Section>
      <div className="col-span-12 md:col-span-6 pb-14">
        <div className="md:pr-14 mb-10 md:mb-44" id="sbiancamento">
          <VerticalVideo
            masterM3U8FilePath="/videos/hls/vertical-explainers/sbiancamento/master.m3u8"
            posterFile={SbiancamentoPoster}
          />
        </div>

        <div
          ref={dentistFearRef}
          className={`md:pl-14 md:pt-4 relative ${
            isDentistFearVisible
              ? "animate-in fade-in md:slide-in-from-right-20 duration-700"
              : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug pb-4">
            Paura del dentista?
          </h1>
          <p className="font-light md:text-lg text-base pb-6 md:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum, ipsum nec vestibulum facilisis, nunc leo blandit dui, eu
            cursus dui enim eu mauris
          </p>
          <Button
            variant={"default"}
            size={"figmaWide"}
            onClick={() => scrollToSection("form")}
          >
            Richiedi appuntamento
          </Button>

          <div className="hidden absolute h-10 w-56 right-[-56px] top-[-56px] md:flex flex-row items-center -z-10">
            <div className="p-2.5 rounded-full border border-figmaWater w-max">
              <div className="bg-figmaWater h-5 w-5 rounded-full"></div>
            </div>
            <hr className="border-figmaWater w-full" />
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 pt-4 md:pt-24 flex flex-col-reverse md:block">
        <div
          className={`md:pr-14 md:pt-4 relative  ${
            isCleaningVisible
              ? "animate-in fade-in md:slide-in-from-left-20 duration-700"
              : "opacity-0"
          }`}
          ref={cleaningRef}
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug pb-4">
            Devi sbiancare i denti?
          </h1>
          <p className="font-light md:text-lg text-base pb-6 md:pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum, ipsum nec vestibulum facilisis, nunc leo blandit dui, eu
            cursus dui enim eu mauris
          </p>
          <Button
            variant={"acquaMarina"}
            size={"figmaWide"}
            onClick={() => scrollToSection("form")}
          >
            Richiedi appuntamento
          </Button>

          <div className="hidden absolute h-10 w-56 left-[-56px] top-[-56px] md:flex flex-row items-center -z-10">
            <hr className="border-figmaWaterGreen w-full" />
            <div className="p-2.5 rounded-full border border-figmaWaterGreen w-max">
              <div className="bg-figmaWaterGreen h-5 w-5 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="md:pl-14 mb-10 md:mt-44" id="paura">
          <VerticalVideo
            masterM3U8FilePath="/videos/hls/vertical-explainers/paura-del-dentista/master.m3u8"
            posterFile={PauraDentistaPoster}
          />
        </div>
      </div>
    </Section>
  );
};
