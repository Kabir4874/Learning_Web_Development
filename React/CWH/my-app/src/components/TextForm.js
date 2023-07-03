import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change Handler");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div className="container"  style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            style={{backgroundColor:props.mode==='light'? 'white':'gray'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4"  style={{color:props.mode==='light'? 'black':'white'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Words, {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
