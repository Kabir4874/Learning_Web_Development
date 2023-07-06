import "./App.scss";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
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
        <Blogs/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
