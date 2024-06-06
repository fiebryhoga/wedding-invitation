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
import styled from "styled-components";
const Cover = styled.div`
  overflow-x: hidden;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center calc(100% - 0px);
  background-size: 136%;
  position: fixed;
  background-image: url("/assets/images/cover1.png");
  background-opacity: 5%;
  min-height: 100vw;
`;

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
    <>
      {isOverlayVisible && (
        <Cover
          className="fixed h-screen inset-0 z-50 flex items-center justify-center pt-36"
          onClick={handleOverlayClick}
        >
            <ButtonStart />
        </Cover>
      )}

      <main className="py-4 pb-12 flex flex-col gap-8">
        <div className="px-4">
          <Hero />
        </div>
        <div className="">
          <Quote />
        </div>
        <div className="px-4">
          <CountingDays />
        </div>
        <div className="">
          <BoxEvent />
        </div>
        <div className="">
          <Location />
        </div>
        <div className="">
          <WeddingGifts />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="w-full text-center text-black text-opacity-80 font-semibold">
            Our Moments
          </h1>
          <Carousel />
        </div>
      </main>
    </>
  );
}
