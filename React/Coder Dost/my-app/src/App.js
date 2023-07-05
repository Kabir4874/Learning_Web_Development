import { useContext, useReducer, useState } from "react";
import "./App.css";
import videoDB from "./Data/Data";
import AddVideo from "./Components/AddVideo";
import VideoList from "./Components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import videosContext from "./Context/VideoContext";
import Counter from "./Components/Counter";

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

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  function editVideo(id) {
    SetEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      <ThemeContext.Provider>
        <videosContext.Provider value={videos}>
          <div className={`App ${themeContext}`}>
            <Counter></Counter>
            <AddVideo
              dispatch={dispatch}
              editableVideo={editableVideo}
            ></AddVideo>
            <VideoList dispatch={dispatch} editVideo={editVideo}></VideoList>
          </div>
        </videosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
