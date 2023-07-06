import React from "react";
import "./style.scss";
import Section from "../shared/section";
import techIcon from "../../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
  return (
    <Section background={"dark"} id={"skills"}>
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={techIcon} alt="" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            inventore magni et? Et, provident eligendi culpa, natus illum, quo
            cumque vero facere fugit dicta id velit. Officiis, tenetur
            dignissimos?
          </p>
          <CallToAction
            text={"Download CV"}
            icon={<AiOutlineCloudDownload/>}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
