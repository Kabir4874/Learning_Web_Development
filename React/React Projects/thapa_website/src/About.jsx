import HeroSection from "./Components/HeroSection";

const About = () => {
  const data = {
    name: "Kabir Ahmed",
    image: "./images/about1.svg",
  };
  return <HeroSection {...data} />;
};

export default About;
