import React from "react";
import Typed from "react-typed";
import Button from "./Button";

const Banner = () => {
  return (
    <div className=" bg-[#2699fb] w-full py-[50px] ">
      <div className=" max-w-[1240px] mx-auto text-center font-bold py-[100px]">
        <div className="text-xl md:text-3xl md:p-[24px] ">Learn with us</div>
        <h2 className=" text-white text-4xl my-5 md:p-[24px]   md:text-[80px]">
          Grow with us.
        </h2>
        <div className="md:text-[50px] text-2xl text-white  md:p-[24px]">
          Learn
          <Typed
            className=" pl-3"
            strings={["Web Development", "UI/UX Design", "Web Design"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
        <Button classes={"mt-4"} text={"Get Started"}/>
      </div>
    </div>
  );
};

export default Banner;
