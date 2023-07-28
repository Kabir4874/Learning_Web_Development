import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context.jsx";

const Home = () => {
  // const data = {
  //   name: "Kabir Ahmed",
  //   image: "./images/hero.svg",
  // };
  const { updateHomepage } = useGlobalContext();
  useEffect(() => {
    updateHomepage();
  }, []);
  return <HeroSection {...data} />;
};

export default Home;
