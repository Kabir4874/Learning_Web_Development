import React, { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState={
    time: "5 day Ago",
    channel: "Coding Hero",
    verified: true,
    title:'',
    views:'',
}

function AddVideo({ addVideos,updateVideo , editableVideo}) {
  const [video, Setvideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        updateVideo(video)
    }else{

        addVideos(video);
    }
    Setvideo(initialState);
  }

  function handleChange(e) {
    Setvideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    if(editableVideo){

        Setvideo(editableVideo)
    }
  },[editableVideo])


  return (
    <div>
      <form>
        <input
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
        <button onClick={handleSubmit}>{editableVideo?'Edit': 'Add'} Video</button>
      </form>
    </div>
  );
}

export default AddVideo;
