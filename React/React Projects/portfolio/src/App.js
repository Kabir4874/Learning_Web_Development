import "./App.scss";
import Intro from "./components/intro";
import Portfolio from "./components/intro/portfolio";
import Skills from "./components/intro/skills";

function App() {
  return (
    <>
      <div>
        <Intro />
        <Skills />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
