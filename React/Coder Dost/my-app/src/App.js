import "./App.css";
import Video from "./Components/Video";

function App() {
  let obj = {
    title: "React JS Tutorial",
    views: "10K",
    time: "1 Year Ago",
    channel: "Coder Dost",
    verified: true
  };

  return (
    <>
      <div className="App">
        <div>Videos</div>
        
        <Video {...obj} />
        <Video
          title="Node Js tutorial"
          views="15K"
          time={"1 month ago"}
          channel={"Code with harry"}
        />
      </div>
    </>
  );
}

export default App;
