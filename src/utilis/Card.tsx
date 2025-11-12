import React from "react";
interface CardProps {
  number: number;
  description: string;
  desc2: string;
  color: string;
}
const Card: React.FC<CardProps> = ({ number, description, desc2, color }) => {
  return (
    <div
      style={{ "--hover-color": color } as React.CSSProperties}
      className="w-full bg-(--hover-color) lg:hover:bg-(--hover-color) lg:text-white  flex flex-col text-[#121315]   lg:hover:text-[#121315] lg:bg-[#1f2326] rounded-3xl transition-colors duration-300 gap-5 p-10 mt-10 "
    >
      <div className="flex text-start text-7xl sm:text-8xl md:text-9xl lg:text-9xl">
        <h1>
          <span>
            {number}
            <sup>+</sup>
          </span>
        </h1>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex text-end justify-end flex-col  uppercase">
        <span>{description}</span>
        <span>{desc2}</span>
      </div>
    </div>
  );
};

export default Card;
