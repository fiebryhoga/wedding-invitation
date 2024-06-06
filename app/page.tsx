/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ButtonStart from "./components/ButtonStart";
import Quote from "./components/Quote";
import BoxEvent from "./components/BoxEvent";
import CountingDays from "./components/CountingDays";

export default function Home() {
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioInstance = new Audio("/assets/music/music1.mp3");
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
    <main className="py-4 flex flex-col">
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
      <Quote/>
      <BoxEvent/>
      <div className="px-4 my-8 mb-12">
        <CountingDays/>
      </div>
      
      <Carousel />
    </main>
  );
}
