import Button from "./Button";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header
        className="px-40 bg-slate-600 w-full h-[100vh] bg-hero-img bg-center bg-cover flex items-center justify-center
    "
      >
        <div className=" absolute w-full h-[100vh] left-0 top-0 bg-[rgb(0,0,0,0.2)]"></div>
        <main className="w-full z-10 flex items-center gap-40">
          <div className=" flex-1 flex flex-col gap-6">
            <p className=" text-white font-bold text-[12px] ">
              WELCOME TO BYFAITH CHURCH
            </p>
            <h1 className="text-white text-[45px] font-bold leading-[1.2]">
              Oh Safe To the Rock That Is Higher Than I
            </h1>
            <p className="text-white">
              Far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <Button text={"go to sermons"} />
          </div>
          <div className=" flex-1 relative flex items-center justify-center cursor-pointer">
            <img src="./image/about_1.jpg.webp" alt="" className=" w-[80%]" />
            <AiOutlinePlayCircle className=" absolute text-white text-[80px]" />
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
