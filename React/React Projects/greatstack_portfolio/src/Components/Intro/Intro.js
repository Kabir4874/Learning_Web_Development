import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Smith</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating visually
          appealing and user friendly websites.
        </p>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
