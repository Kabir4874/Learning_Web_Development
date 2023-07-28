import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";

const About = () => {
  // const data = {
  //   name: "Kabir Ahmed",
  //   image: "./images/about1.svg",
  // };

  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);

  return <HeroSection {...data} />;
};

export default About;
