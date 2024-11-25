import { StaticImageData } from "next/image";

export type cardData = {
  title: string;
  description: string;
  startingPrice: number;
  image: StaticImageData;
};
