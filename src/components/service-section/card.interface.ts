import { dentalServiceOptions } from "@src/lib/dental-form/schemas";
import { StaticImageData } from "next/image";

export type cardData = {
  title: string;
  description: string;
  startingPrice: number;
  image: StaticImageData;
  formServiceOption: (typeof dentalServiceOptions)[number];
};
