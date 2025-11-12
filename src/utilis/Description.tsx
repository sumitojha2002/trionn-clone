import React from "react";

interface DescriptionProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
}
const Description: React.FC<DescriptionProps> = ({
  title,
  subtitle,
  subtitle2,
  desc1,
  desc2,
  desc3,
  desc4,
}) => {
  return (
    <div className="mt-10 mb-10 gap-4 text-start w-full  ">
      <h1 className="py-5 flex flex-col text-[70px]/15 sm:text-[100px]/20 md:text-[150px]/30 lg:text-[200px]/40 uppercase">
        <span>{title}</span>
        <span>{subtitle}</span>
        <span>{subtitle2}</span>
      </h1>
      <div className="flex flex-col text-[20px]/6 sm:text-[25px]/6 md:text-[30px]/7 lg:text-[35px]/8 ">
        <span>{desc1}</span>
        <span>{desc2}</span>
        <span>{desc3}</span>
        <span>{desc4}</span>
      </div>
    </div>
  );
};

export default Description;
