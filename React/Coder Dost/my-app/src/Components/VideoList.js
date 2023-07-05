import React from "react";

import Video from "./Video";
import PlayButton from "./PlayButton";
function VideoList({ videos, deleteVideo, editVideo }) {
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
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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
