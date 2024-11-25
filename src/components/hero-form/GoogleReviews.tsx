import { Star } from "lucide-react";
import Image from "next/image";
import GoogleLogo from "../../../public/logos/googleLogo.svg";

export const GoogleReviews = () => {
  return (
    <div className="flex flex-col">
      <Image
        priority
        src={GoogleLogo}
        className="pb-1"
        alt="Recensioni su Google Maps Dr. Angelo Baiano"
      />
      <div className="flex flex-row gap-[2px] items-center w-max">
        <p className="pr-2 font-light text-sm">12 recensioni</p>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className="fill-figmaWaterGreen text-figmaWaterGreen h-4 w-4"
          />
        ))}
      </div>
    </div>
  );
};
