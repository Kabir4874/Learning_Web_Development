import React, { useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideos }) {
  const [video, Setvideo] = useState({
    time: "5 day Ago",
    channel: "Coding Hero",
    verified: true,
  });
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    console.log(video);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    Setvideo({ ...video, [e.target.name]: e.target.value });
    console.log(video);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
        />
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </div>
  );
}

export default AddVideo;
