"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

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
    <main className="pt-12 flex flex-col gap-4">
      {isOverlayVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          onClick={handleOverlayClick}
        >
          <button className="px-4 py-4 text-xl tracking-wide font-medium bg-slate-100 text-black rounded-lg border border-slate-400 hover:bg-black hover:text-white">
            Open the invitation
          </button>
        </div>
      )}
      <div className="px-4 pb-8">
        <Hero />
      </div>
      <h2 className="font-semibold text-black text-2xl text-center">
        Our Moment
      </h2>
      <Carousel />
    </main>
  );
}
