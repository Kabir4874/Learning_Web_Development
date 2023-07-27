import HeroSection from "./Components/HeroSection";

const Home = () => {
  const data = {
    name: "Kabir Ahmed",
    image: "./images/hero.svg",
  };
  return <HeroSection {...data} />;
};

export default Home;
