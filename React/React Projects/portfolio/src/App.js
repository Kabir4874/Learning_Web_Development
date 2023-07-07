import "./App.scss";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
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
        {/* <Blogs/>
        <Contact/>
        <Footer/> */}
      </div>
    </>
  );
}

export default App;
