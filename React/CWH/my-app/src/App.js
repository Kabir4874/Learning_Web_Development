import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, SetMode]= useState('light');

  const toggleMode=  ()=>{

    if(mode=== 'light'){
      SetMode('dark');
      document.body.style.backgroundColor="gray";
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor="white";

    }

  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
      <TextForm heading="Enter The text to analyze below" mode={mode}/> 
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
