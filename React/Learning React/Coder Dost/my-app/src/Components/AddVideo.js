import React, { useEffect, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../Hooks/VideoDispatch";

const initialState = {
  time: "5 day Ago",
  channel: "Coding Hero",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ editableVideo }) {
  const [video, Setvideo] = useState(initialState);
  const dispatch = useVideoDispatch();

  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "Update", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    Setvideo(initialState);
  }

  function handleChange(e) {
    Setvideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      Setvideo(editableVideo);
    }
    inputRef.current.value = "demo";
  }, [editableVideo]);

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
