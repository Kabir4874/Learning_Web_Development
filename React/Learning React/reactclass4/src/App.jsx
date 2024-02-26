import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Kabir");
  // !Variation 1 -> Every Render
  // useEffect(()=>{
  //   console.log("UI Rendering Done");
  // });
  // !Variation 2 -> First Render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // }, []);
  // !Variation 3 -> First Render + Whenever Dependency Changes
  // useEffect(() => {
  //   console.log("Change Observed");
  // }, [name]);
  // !Variation 4 ->
  useEffect(() => {
    console.log("Listener Added");
    return () => {
      console.log("Listener Removed");
    };
  }, [text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
