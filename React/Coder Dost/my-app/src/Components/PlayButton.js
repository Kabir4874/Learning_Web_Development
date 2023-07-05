import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  const[ playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying( !playing);
  }
  return <button onClick={handleClick}>{children}: {playing?">":"||"}</button>;
}

export default PlayButton;
