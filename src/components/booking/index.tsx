import { Section } from "../section";
import Image from "next/image";
import BackgroundImage from "../../../public/the-studio/1.jpg";
import styles from "./Booking.module.css";
import { GoogleReviews } from "../hero-form/GoogleReviews";
import { MioDottoreReviews } from "../hero-form/MioDottoreReviews";
import MyForm from "./form";

export const Booking = () => {
  return (
    <Section bgTwCSS="relative overflow-hidden" id="form">
      <Image
        src={BackgroundImage}
        alt={"Background image"}
        className="z-0"
        placeholder="blur"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay */}
      <div className={styles.overlayBg}></div>

      <div className="col-span-12 z-10">
        <div className="max-w-lg mx-auto">
          <h1
            className="text-3xl md:text-4xl text-center text-white font-semibold max-w-md mx-auto pb-8"
            style={{ lineHeight: "1.375" }}
          >
            Prenota il Tuo Trattamento Dentale
          </h1>

          <div className={`${styles.cardBg} z-10 p-4 text-white mb-8`}>
            <MyForm />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-10 text-white">
            <MioDottoreReviews />
            <GoogleReviews />
          </div>
        </div>
      </div>
    </Section>
  );
};
