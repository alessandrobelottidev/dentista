import styles from "./HeroForm.module.css";
import { PhoneCall } from "lucide-react";
import MyForm from "./form";
import { MioDottoreReviews } from "./MioDottoreReviews";
import { GoogleReviews } from "./GoogleReviews";

export const HeroForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div className={`flex w-full max-w-lg p-4 ${styles.bg}`}>
        <MyForm />
      </div>
      <div className="flex gap-5 flex-wrap md:flex-row lg:flex-col justify-center">
        <MioDottoreReviews />
        <GoogleReviews />
        <CallUs />
      </div>
    </div>
  );
};

const CallUs = () => {
  return (
    <div className="flex flex-row items-center">
      <PhoneCall className="h-7 w-7 mr-2" />
      <div className="text-sm font-light">
        <p className="text-xs">Puoi chiamarci al</p>
        <a href="tel:+393391758196" className="underline">
          +39 339 175 8196
        </a>
      </div>
    </div>
  );
};
