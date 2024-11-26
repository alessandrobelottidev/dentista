"use client";
import { useContext } from "react";
import { HomeContext } from "../app/(homepage)/HomeProvider";

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
