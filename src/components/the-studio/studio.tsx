import { BadgeCheck, Eye, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@src/components/ui/dialog";

import Img1 from "../../../public/the-studio/1.jpg";
import Img2 from "../../../public/the-studio/2.jpg";
import Img3 from "../../../public/the-studio/3.jpg";
import Img4 from "../../../public/the-studio/4.jpg";
import Img5 from "../../../public/the-studio/5.jpg";
import Img6 from "../../../public/the-studio/6.jpg";
import { Section } from "../section";

export const Studio = () => {
  return (
    <Section bgTwCSS="bg-figmaLightBg">
      <div className="pr-8 lg:col-span-4 col-span-12 pb-14 lg:pb-0" id="studio">
        <div className="sticky top-24">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug pb-4">
            Lo studio
          </h1>
          <p className="font-light text-base md:text-lg pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum, ipsum nec vestibulum facilisis, nunc leo blandit dui, eu
            cursus dui enim eu mauris.
          </p>

          <p className="font-semibold text-base md:text-lg pb-2">
            Perché sceglierci?
          </p>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Professionalità e Competenza
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Tecnologie all&apos;Avanguardia
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Igiene e Sicurezza Garantite
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Trattamenti Indolori
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Risultati Estetici e Funzionali
            </p>
          </div>
          <div className="flex flex-row gap-2 pb-10">
            <BadgeCheck
              className="fill-figmaWaterGreen text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">
              Trasparenza nei Costi
            </p>
          </div>

          <p className="font-semibold text-lg pb-2">Dove lavoriamo?</p>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <MapPin
              className="fill-figmaSky text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">Milano</p>
          </div>
          <div className="flex flex-row gap-2 pb-2 items-center">
            <MapPin
              className="fill-figmaSky text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">Napoli</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <MapPin
              className="fill-figmaSky text-figmaLightBg"
              height={32}
              width={32}
            />
            <p className="font-light md:text-lg text-base">Roma</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12 flex flex-col gap-4 md:gap-8">
        <div className="flex gap-4 md:gap-8 md:flex-row flex-col">
          <div className="gap-4 md:gap-8 flex flex-col md:flex-[484]">
            <GalleryImage src={Img1} />

            <GalleryImage src={Img3} />
          </div>

          <GalleryImage src={Img2} css="md:flex-[327]" />
        </div>

        <div className="flex gap-4 md:gap-8 md:flex-row flex-col-reverse">
          <GalleryImage src={Img4} css="md:flex-[327]" />

          <div className="gap-4 md:gap-8 flex flex-col md:flex-[484]">
            <GalleryImage src={Img5} />

            <GalleryImage src={Img6} />
          </div>
        </div>
      </div>
    </Section>
  );
};

const GalleryImage = ({
  src,
  alt,
  css,
}: {
  src: StaticImageData;
  alt?: string;
  css?: string;
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl ${css}`}>
      <Image
        className="overflow-hidden duration-300 transition-all w-full group-hover:scale-125"
        src={src}
        alt={`Image of the gallery: ${alt}`}
        placeholder="blur"
      />

      <div className="absolute top-0 left-0 w-full h-full duration-300 transition-all group-hover:bg-[#00c5a474]"></div>

      {/* <Dialog>
        <DialogTrigger className="hidden p-4 group-hover:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Eye className="text-white" />
        </DialogTrigger>
        <DialogContent>
          <Image
            className="h-full w-auto"
            src={src}
            alt={`Image of the gallery: ${alt}`}
          />
        </DialogContent>
      </Dialog> */}
    </div>
  );
};
