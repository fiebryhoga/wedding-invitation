/* eslint-disable @next/next/no-img-element */
import React from "react";

interface SlideCardProps {
  position: "center" | "left" | "right" | "hidden";
  image: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ position, image }) => {
  let transformClasses = "";
  let opacityClasses = "";

  switch (position) {
    case "center":
      transformClasses = "transform scale-110";
      opacityClasses = "opacity-100";
      break;
    case "left":
      transformClasses = "transform translate-x-[-120%] scale-75";
      opacityClasses = "opacity-75";
      break;
    case "right":
      transformClasses = "transform translate-x-[120%] scale-75";
      opacityClasses = "opacity-75";
      break;
    case "hidden":
      transformClasses = "transform translate-x-[200%] scale-75";
      opacityClasses = "opacity-0";
      break;
  }

  return (
    <div
      className={`absolute transition-all h-44 w-28 duration-500 ease-in-out bg-black rounded-xl ${transformClasses} ${opacityClasses}`}
    >
      <img className="object-cover opacity-80 w-full h-full rounded-xl" src={image} alt="" />
    </div>
  );
};

export default SlideCard;
