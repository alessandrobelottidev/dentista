import { Metadata } from "next";
import { Studio } from "@src/components/the-studio/studio";
import { VerticalExplainers } from "@src/components/vertical-explainers";
import { Services } from "@src/components/service-section";
import { Booking } from "@src/components/booking";
import { Footer } from "@src/components/Footer";
import { HeroNavbar } from "@src/components/HeroNavbar";
import { HomeProvider } from "./HomeProvider";

export const metadata: Metadata = {
  title: "No al turismo dentale!",
  description:
    "Proteggi la tua salute con trattamenti odontoiatrici di qualità, trasparenza e sicurezza. Informati sui rischi del risparmio a scapito della tua salute dentale.",
};

export default function Home() {
  return (
    <>
      <HomeProvider>
        <HeroNavbar />

        <Studio />

        <VerticalExplainers />

        <Services />

        <Booking />

        <Footer />
      </HomeProvider>
    </>
  );
}
