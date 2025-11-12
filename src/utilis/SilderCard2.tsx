import React from "react";

interface SilderCard2Props {
  image: string;
  name: string;
  post: string;
  desc?: string;
}

const SilderCard2: React.FC<SilderCard2Props> = ({
  desc,
  image,
  name,
  post,
}) => {
  return (
    <div className="border rounded-2xl  flex flex-col items-center  justify-between  w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[520px] shrink-0">
      <div>
        <div className=" text-[70px]">
          <p>‟</p>
        </div>
        <div className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px]">
          <p className="text-[12px] sm:text-[15px] md:text-[16px] lg:text-[19px] pb-[60px]">
            {desc}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3  items-center">
          <img
            src={image}
            alt={name}
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <div className="text-[15px] sm:text-[20px] md:text-[20px] lg:[30px] ">
            {name}
          </div>
          <div className="text-[10px] sm:text-[12px] md:text-[15px] lg:[25px] pb-5">
            {post}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SilderCard2;
