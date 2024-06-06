"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled component for the background
const Background = styled.div`
  overflow-x: hidden;
  background-color: black;
  background-repeat: no-repeat;
  background-position: center calc(100% - 0px);
  background-size: cover;
  position: relative;
  background-image: url("/assets/images/tekstur2.png");
  background-opacity: 5%;
  min-height: 180px;
`;

// Define the type for timeLeft
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Calculate the remaining time until the target date
const calculateTimeLeft = (): TimeLeft => {
  const targetDate = new Date("2024-09-23T08:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

// Countdown component
const CountingDays: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Background className="w-full rounded-lg flex flex-col justify-between items-center py-4 gap-4">
      <h2 className="text-base text-white text-opacity-80 font-semibold">
        Menghitung Hari
      </h2>
      <div className="flex flex-row gap-12 justify-center items-center px-2">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[13px] font-semibold text-white">Akad Nikah</h3>
          <h3 className="text-[10px] text-white text-opacity-80 font-semibold text-center mt-2">
            Selasa, 23 September 2024
          </h3>
          <p className="text-center text-white text-opacity-80 text-[10px] font-semibold">
            08.00 WIB
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[13px] font-semibold text-white">Akad Nikah</h3>
          <h3 className="text-[10px] text-white text-opacity-80 font-semibold mt-2 text-center">
            Selasa, 23 September 2024
          </h3>
          <p className="text-center text-white text-opacity-80 text-[10px] font-semibold">
            10.00 WIB
          </p>
        </div>
      </div>

      <div className="flex flex-row">
        <h4 className="text-white text-opacity-90 font-semibold tracking-wide text-[12px]">
          <span className="text-white ml-2 text-opacity-90 font-semibold tracking-wide text-[17px]">
            {timeLeft.days}
          </span>{" "}
          Hari
          <span className="text-white ml-2 text-opacity-90 font-semibold tracking-wide text-[17px]">
            {timeLeft.hours}
          </span>{" "}
          Jam
          <span className="text-white ml-2 text-opacity-90 font-semibold tracking-wide text-[17px]">
            {timeLeft.minutes}
          </span>{" "}
          Menit
          <span className="text-white ml-2 text-opacity-90 font-semibold tracking-wide text-[17px]">
            {timeLeft.seconds}
          </span>{" "}
          Detik
        </h4>
      </div>
    </Background>
  );
};

export default CountingDays;
