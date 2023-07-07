import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[12px] mx-auto flex justify-between items-center">
        <div className="text-xl md:text-3xl font-bold">Kabir Ahmed</div>
        {toggle ? (
          <AiOutlineMenu
            className=" text-white text-2xl block md:hidden"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineClose
            className=" text-white text-2xl block md:hidden"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <ul className=" hidden md:flex text-white gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        {/* Responsive Menu  */}
        <ul
          className={`md:hidden text-white fixed bg-black ${
            toggle ? "left-[-100%]" : "left-[0]"
          } top-[83px] h-screen w-full transition-all ease-in-out duration-500`}
        >
          <li className="cursor-pointer p-5">Home</li>
          <li className="cursor-pointer p-5">Company</li>
          <li className="cursor-pointer p-5">Resources</li>
          <li className="cursor-pointer p-5">About</li>
          <li className="cursor-pointer p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
