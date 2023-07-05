import React, { useContext } from "react";

import Video from "./Video";
import PlayButton from "./PlayButton";
import videosContext from "../Context/VideoContext";
function VideoList({ dispatch, editVideo }) {
  const videos = useContext(videosContext);
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          editVideo={editVideo}
          dispatch={dispatch}
        >
          <PlayButton
            onPlay={() => console.log("Play", video.title)}
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default VideoList;
