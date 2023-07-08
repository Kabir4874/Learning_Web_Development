import React from "react";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <div className="w-full bg-[#2699fb] p-5">
      <div className="max-w-[1240px]  py-[40px] m-auto items-center lg:flex  justify-between text-center lg:text-left">
        <div className="my-4">
          <h2 className="md:text-[40px] text-[30px] font-bold text-white capitalize">
            Want to learn latest IT skills?
          </h2>
          <p className="text-white">
            sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="my-4">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Email"
              className="py-3 px-2 rounded mr-2 w-full sm:w-auto mb-3 sm:mb-0"
            />
            <Button text={"Notify Me"} classes={"w-full sm:w-auto"} />
          </div>

          <p className="text-white capitalize">
            we care about the protection of your data. <br /> read our{" "}
            <a href="#" className="text-black">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
