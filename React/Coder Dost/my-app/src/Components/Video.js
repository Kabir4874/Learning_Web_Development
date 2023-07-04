import React from "react";
import "./Video.css";

function Video({ title, channel, views, verified, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://source.unsplash.com/500x300/?portrait" alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}

export default Video;
