"use client";

import { DentalFormValues } from "@src/lib/dental-form/schemas";
import React, { createContext, useState, RefObject } from "react";

export type SectionKey = "form" | string;

interface GlobalState {
  dentalHelpForm: DentalFormValues;
  [key: string]: any;
}

interface HomeContextType {
  refs: Record<SectionKey, RefObject<HTMLElement>>;
  scrollToSection: (sectionKey: SectionKey) => void;
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
  registerRef: (key: SectionKey, ref: RefObject<HTMLElement>) => void;
}

export const HomeContext = createContext<HomeContextType | undefined>(
  undefined
);

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [sectionRefs, setSectionRefs] = useState<
    Record<SectionKey, RefObject<HTMLElement>>
  >({});

  const [globalState, setGlobalState] = useState<GlobalState>({
    dentalHelpForm: {
      full_name: "",
      phone_number: "",
      email: "",
      service: "Implantologia un dente",
      place: "Milano",
    },
  });

  const scrollToSection = (sectionKey: SectionKey) => {
    const section = sectionRefs[sectionKey]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const registerRef = (key: SectionKey, ref: RefObject<HTMLElement>) => {
    setSectionRefs((prev) => ({
      ...prev,
      [key]: ref,
    }));
  };

  return (
    <HomeContext.Provider
      value={{
        refs: sectionRefs,
        globalState,
        scrollToSection,
        setGlobalState,
        registerRef,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
