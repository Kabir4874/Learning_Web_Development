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

  function editVideo(id) {
    SetEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      <div className="App">
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList
          videos={videos}
          dispatch={dispatch}
          editVideo={editVideo}
        ></VideoList>
      </div>
    </>
  );
}

export default App;
