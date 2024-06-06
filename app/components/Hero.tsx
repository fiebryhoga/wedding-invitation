"use client";

import React from 'react'
import styled from "styled-components";
const Background = styled.div`
  
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-position: center calc(100% - 0px);
  background-size: 100%;
  background-image: url("/assets/images/hero.jpg");
  background-opacity: 20%;
  position: relative;

  
  }
`;
const Hero = () => {
  return (
    <Background className="bg-black h-60 rounded-xl">
      <div className="bg-black w-full h-full bg-opacity-10 flex flex-col items-center justify-center gap-2">
        <h2 className="text-white text-3xl font-serif">The Wedding</h2>
        <i className="text-white text-xl font-serif tracking-wide">Ihzra & Maulidiyah</i>
      </div>
    </Background>
  );
}

export default Hero
