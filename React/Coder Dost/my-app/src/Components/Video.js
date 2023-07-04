import React from "react";
import "./Video.css";

function Video({ title, channel, views, time }) {
  let bg = "dark";
  return (
    <>
      <div className="pic">
        <img src="https://source.unsplash.com/500x300/?portrait" alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">{views} views <span>.</span>{time}</div>
    </>
  );
}

export default Video;
