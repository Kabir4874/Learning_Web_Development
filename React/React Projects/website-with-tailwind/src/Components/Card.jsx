import React from "react";

import Button from "./Button";

const Card = ({ title, price, cls, btn, card_cls }) => {
  return (
    <div
      className={`shadow-xl hover:scale-105 duration-300 text-center p-10 rounded ${card_cls}`}
    >
      {btn}
      <h3 className="text-2xl font-bold">{title}</h3>
      <h2 className="text-3xl font-bold my-6">{price}</h2>
      <p className="my-3 border-b pb-2">Lorem ipsum dolor</p>
      <p className="border-b pb-2">Lorem ipsum dolor sit amet.</p>
      <p className="my-3 border-b pb-2">Lorem ipsum dolor sit.</p>
      <Button text={"Start Trial"} classes={`w-[80%] md:w-[50%] mt-4 ${cls}`} />
    </div>
  );
};

export default Card;
