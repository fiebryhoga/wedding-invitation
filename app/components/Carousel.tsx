"use client";
import React, { useState, useEffect } from "react";
import SlideCard from "./SlideCard";

const moments = [
  { id: 1, image: "/assets/images/moments/moment1.jpg" },
  { id: 2, image: "/assets/images/moments/moment2.jpg" },
  { id: 3, image: "/assets/images/moments/moment3.jpg" },
  { id: 4, image: "/assets/images/moments/moment4.jpg" },
  { id: 5, image: "/assets/images/moments/moment5.jpg" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % moments.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (
    index: number
  ): "center" | "left" | "right" | "hidden" => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + moments.length) % moments.length)
      return "left";
    if (index === (currentIndex + 1) % moments.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative flex justify-center items-center h-52 overflow-hidden">
      {moments.map((moment, index) => (
        <SlideCard
          key={moment.id}
          position={getCardStyle(index)}
          image={moment.image}
        />
      ))}
    </div>
  );
};

export default Carousel;
