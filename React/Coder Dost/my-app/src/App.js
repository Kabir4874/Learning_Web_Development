import "./App.css";
import Video from "./Components/Video";

function App() {
  let videos = [
    {
      title: "React JS Tutorial",
      views: "10K",
      time: "1 Year Ago",
      channel: "Coder Dost",
      verified: true,
    },
    {
      title: "Node JS Tutorial",
      views: "15K",
      time: "1 month Ago",
      channel: "Code with harry",
      verified: false,
    },
    {
      title: "MongoDB Tutorial",
      views: "25K",
      time: "1 day Ago",
      channel: "CodeBabbar",
      verified: true,
    },
  ];

  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => (
          <Video
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
          />
        ))}
      </div>
    </>
  );
}

export default App;
