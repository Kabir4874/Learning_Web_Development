import { useState } from "react";
import "./App.css";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/Video";
import videoDB from "./Data/Data";
import AddVideo from "./Components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <>
      <div className="App">
        <div>
          <AddVideo addVideos={addVideos}></AddVideo>
        </div>
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
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
    </>
  );
}

export default App;
