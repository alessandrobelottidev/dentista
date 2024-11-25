import { Star } from "lucide-react";
import MioDottoreLogo from "../../../public/logos/mioDottoreLogo.svg";
import Image from "next/image";

export const MioDottoreReviews = () => {
  return (
    <div className="flex flex-col">
      <Image
        priority
        src={MioDottoreLogo}
        className="pb-1"
        alt="Recensioni su mio dottore Dr. Angelo Baiano"
      />
      <div className="flex flex-row gap-[2px] items-center w-max">
        <p className="pr-2 font-light text-sm">49 recensioni</p>
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
