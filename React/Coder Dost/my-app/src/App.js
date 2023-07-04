import "./App.css";
import Video from "./Components/Video";

function App() {
  let videos = [
    {
      id: 1,
      title: "React JS Tutorial",
      views: "10K",
      time: "1 Year Ago",
      channel: "Coder Dost",
      verified: false,
    },
    {
      id: 2,
      title: "Node JS Tutorial",
      views: "15K",
      time: "1 month Ago",
      channel: "Code with harry",
      verified: true,
    },
    {
      id: 3,
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
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
          />
        ))}
      </div>
    </>
  );
}

export default App;
