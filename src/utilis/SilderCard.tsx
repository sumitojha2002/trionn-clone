import React from "react";
import SilderButton from "./SilderButton";

interface SilderCardProps {
  image: string;
  name: string;
  post: string;
}

const SilderCard: React.FC<SilderCardProps> = ({ image, name, post }) => {
  return (
    <div className="rounded-2xl mb-10 pt-30 pb-30 border flex flex-col items-center  justify-center w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[520px] shrink-0">
      <div className="pb-10">
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] rounded-full object-cover"
        />
      </div>
      <div className="pb-5">
        <div className="text-2xl">{name}</div>
        <div className="text-[15px]">{post}</div>
      </div>
      <div>
        <SilderButton />
      </div>
    </div>
  );
};

export default SilderCard;
