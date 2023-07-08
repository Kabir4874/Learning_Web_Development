import React from "react";
import laptop from "./img/laptop.jpg";
import Button from "./Button";

const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 my-12 items-center text-center md:text-left">
      <div className=" col-span-1 w-full md:w-[80%] ">
        <img src={laptop} alt="" />
      </div>
      <div className=" col-span-1">
        <h2 className="text-[#00df9a] font-bold text-xl mt-4">
          Learn From experts
        </h2>
        <p className=" my-4 text-[18px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo natus
          libero autem maxime facilis animi veritatis quibusdam illo harum
          tempore ratione, dignissimos fugit dolor laudantium. Maiores placeat
          laboriosam voluptatem dolore?
        </p>
        <Button text={"Get Started"}/>
      </div>
    </div>
  );
};

export default Experts;
