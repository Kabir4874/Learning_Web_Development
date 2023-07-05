import { useState } from "react";
import "./App.css";
import videoDB from "./Data/Data";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";

function App() {
  const [videos, setVideos] = useState(videoDB);

  const [editableVideo, SetEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    SetEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    videos.splice(index, 1, video);
  }
  return (
    <>
      <div className="App">
        <AddVideo
          addVideos={addVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          videos={videos}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        ></VideoList>
      </div>
    </>
  );
}

export default App;
