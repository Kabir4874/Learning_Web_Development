import "./App.css";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/Video";
import videos from "./Data/Data";

function App() {
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          />
        ))}
        <div style={{clear: "both"}}>
          <PlayButton message={"Play Message"} >Play</PlayButton>
          <PlayButton message={"Pause Message"}>Pause</PlayButton>
        </div>
      </div>
    </>
  );
}

export default App;
