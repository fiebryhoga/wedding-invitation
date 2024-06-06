/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ButtonStart from "./components/ButtonStart";
import Quote from "./components/Quote";
import BoxEvent from "./components/BoxEvent";
import CountingDays from "./components/CountingDays";
import WeddingGifts from "./components/WeddingGifts";
import Location from "./components/Location";

export default function Home() {
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioInstance = new Audio("/assets/music/janjisuci.mp3");
    audioInstance.loop = true;
    setAudio(audioInstance);
  }, []);

  const handleOverlayClick = () => {
    setOverlayVisible(false);
    audio?.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  };

  return (
    <main className="py-4 pb-12 flex flex-col">
      {isOverlayVisible && (
        <div
          className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-white"
          onClick={handleOverlayClick}
        >
          <ButtonStart />
        </div>
      )}
      <div className="px-4">
        <Hero />
      </div>
      <div className="pt-4">
        <Quote />
      </div>
      <div className="px-4 my-8 mb-12">
        <CountingDays />
      </div>
      <div className="py-4 mb-4">
        <BoxEvent />
      </div>
      <div className="py-4 mb-4">
        <Location />
      </div>
      <div className="py-4">
        <WeddingGifts />
      </div>
      <div className="py-6 flex flex-col gap-4">
        <h1 className="w-full text-center text-black text-opacity-80 font-semibold">
          Our Moments
        </h1>
        <Carousel />
      </div>
    </main>
  );
}
