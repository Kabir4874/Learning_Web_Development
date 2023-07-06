import React from "react";

import "./style.scss";
import Arrow from "../../shared/CallToAction/arrow";

const Showcase = ({ data, transition }) => {
  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
        key={project.name}
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomout"
              : transition === "zoomin"
              ? "zoomin"
              : ""
          }`}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <span className="text">Project Details</span>
              <Arrow />
            </div>
          </div>
          <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
