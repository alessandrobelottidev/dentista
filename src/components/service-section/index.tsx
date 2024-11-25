import { Section } from "@src/components/section";
import Image1 from "../../../public/services/1.jpg";
import Image2 from "../../../public/services/2.jpg";
import Image3 from "../../../public/services/3.jpg";
import Image4 from "../../../public/services/4.jpg";
import Image5 from "../../../public/services/5.jpg";
import type { cardData } from "./card.interface";
import { Card } from "./Card";
import { Agevolazioni } from "./Agevolazioni";

export const Services = () => {
  const services: cardData[] = [
    {
      title: "Implantologia un dente",
      description: "Riabilitazione di un singolo elemento dentale.",
      startingPrice: 899,
      image: Image1,
    },
    {
      title: "Overdenture",
      description:
        "Riabilitazione semifissa su 2 impianti per arcata completa.",
      startingPrice: 2900,
      image: Image2,
    },
    {
      title: "All on Four",
      description: "Riabilitazione fissa su 4 impianti per arcata completa.",
      startingPrice: 3999,
      image: Image3,
    },
    {
      title: "All on Six",
      description: "Riabilitazione fissa su 6 impianti per arcata completa.",
      startingPrice: 4499,
      image: Image4,
    },
    {
      title: "Protesi mobile arcata completa",
      description: "Riabilitazione rimovibile per arcata.",
      startingPrice: 690,
      image: Image5,
    },
  ];

  return (
    <Section bgTwCSS="bg-figmaDarkWaterGreen">
      <div className="col-span-12 mb-4 md:mb-8" id="services">
        <h1
          className="text-3xl md:text-4xl text-center text-white font-semibold max-w-xl mx-auto pb-4"
          style={{ lineHeight: "1.375" }}
        >
          <span className="underline underline-offset-4">Listino prezzi</span>{" "}
          per combattere il turismo dentale
        </h1>
      </div>

      <div className="col-span-12 flex flex-wrap gap-4 md:gap-[3%]">
        {services.map((cardData, i) => (
          <Card
            key={cardData.title}
            cardData={cardData}
            delay={i % 3 == 0 ? 0 : i % 3 == 1 ? 300 : 500}
          />
        ))}
        <Agevolazioni />
      </div>
    </Section>
  );
};
