"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import HLSPlayer from "./HLSPLayer";
import styles from "./Hero.module.css";
import VerticalVideoAutoStart from "./VerticalVideoAutoStart";
import { HeroForm } from "./hero-form/hero-form";

export const HeroNavbar = () => {
  const [heroHeight, setHeroHeight] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateHeight();

    // Optional: Add resize observer for dynamic changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (heroRef.current) {
      resizeObserver.observe(heroRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-white"
        style={{ minHeight: "calc(100vh - 64px)" }}
        ref={heroRef}
        id="hero"
      >
        {/* Background video */}
        <HLSPlayer
          masterM3U8FilePath="/videos/hls/hero/master.m3u8"
          posterFile="/videos/hls/hero/poster.jpg"
        />

        {/* Overlay */}
        <div className={`${styles.heroOverlay} -z-10`}></div>

        <div className="z-20 w-full flex flex-col items-center justify-center">
          <div className="max-w-7xl w-full p-4 pb-10 md:pb-4 grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="max-w-sm w-full mx-auto">
                <VerticalVideoAutoStart
                  masterM3U8FilePath="/videos/hls/ideatoreDelProgetto/master.m3u8"
                  posterFile="/videos/hls/ideatoreDelProgetto/ideatoreDelProgetto.jpg"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-4"
                style={{ lineHeight: "1.25" }}
              >
                Ricevi servizi dentali{" "}
                <span className="text-figmaAccent underline underline-offset-4">
                  migliori
                </span>
                , a{" "}
                <span className="text-figmaAccent underline underline-offset-4">
                  prezzi competitivi
                </span>{" "}
                in Italia!
              </h1>
              <p className="font-light pb-10 text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum, ipsum nec vestibulum facilisis, nunc leo blandit dui, eu
                cursus dui enim eu mauris.
                <br />
                <br />
                Mauris tristique egestas urna sit amet rutrum. In vulputate
                ipsum eget sapien bibendum suscipit. Nam ac sapien sit amet est
                consectetur maximus.
              </p>

              <HeroForm />
            </div>
          </div>
        </div>
      </div>

      <Navbar heroHeight={heroHeight} />
    </>
  );
};
