import React from "react";

interface ShowcaseProps {
  image: string;
  title: string;
  tags: string;
  reverse?: boolean;
}

const Showcase: React.FC<ShowcaseProps> = ({
  image,
  title,
  tags,
  reverse = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col sm:flex-col md:flex-col lg:flex-row items-center mb-10 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`w-full flex flex-col justify-center sm:text-center sm:items-center md:text-center md:items-center ${
          reverse ? " lg:text-end lg:items-end" : "lg:text-start lg:items-start"
        } gap-10 mb-10`}
      >
        <div className="flex flex-col">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px]">
            <span className="uppercase">{title}</span>
          </h1>
          <span>{tags}</span>
        </div>

        <div className="md:hidden sm:hidden hidden lg:flex">
          <button>View Project</button>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <img src={image} alt={title} className="w-4xl rounded-2xl" />
      </div>
    </div>
  );
};

export default Showcase;
