import React from "react";
import "./Video.css";

function Video({ title, channel, views, verified, time, id, children }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/400/300`} alt="" />
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
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
