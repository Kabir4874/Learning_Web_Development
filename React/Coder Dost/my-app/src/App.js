import { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./Data/Data";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";

function App() {
  const [editableVideo, SetEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "Delete":
        return videos.filter((video) => video.id !== action.payload);
      case "Update":
        const index = videos.findIndex((v) => v.id === action.payload);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        SetEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  function addVideos(video) {
    dispatch({ type: "ADD", payload: video });
  }

  function deleteVideo(id) {
    dispatch({ type: "Delete", payload: id });
  }
  function editVideo(id) {
    SetEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    dispatch({ type: "Update", payload: video });
    // setVideos(newVideos);
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
