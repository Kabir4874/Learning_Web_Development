import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import Button from "./Button";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import Card from "./Card";

const Plans = () => {
  return (
    <div className="md:py-[100px] py-[40px]">
      <div className="lg:grid grid-cols-3 gap-5 max-w-[1240px] m-auto">
        <Card
          title={"Web Development"}
          price={"$169"}
          btn={<BiCodeAlt className="text-[60px] m-auto my-6" />}
          cls={"bg-green-600"}
        />
        <Card
          title={"Digital Marketing"}
          price={"$169"}
          card_cls={"bg-gray-100"}
          btn={<HiOutlineSpeakerphone className="text-[60px] m-auto my-6" />}
          cls={"bg-black"}
        />
        <Card
          title={"App Development"}
          price={"$169"}
          btn={<FaMobileAlt className="text-[60px] m-auto my-6" />}
          cls={"bg-green-600"}
        />
      </div>
    </div>
  );
};

export default Plans;
