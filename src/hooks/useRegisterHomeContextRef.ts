import { SectionKey } from "@src/app/(homepage)/HomeProvider";
import { useHomeContext } from "@src/hooks/useHomeContext";
import React from "react";
import { useRef } from "react";

export const useRegisterHomeContextRef = (key: SectionKey) => {
  const { registerRef } = useHomeContext();
  const ref = useRef<HTMLElement>(null);

  React.useEffect(() => {
    registerRef(key, ref);
  }, [key, ref]);

  return ref;
};
