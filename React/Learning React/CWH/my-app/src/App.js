import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-5">
        {/* <Routes> */}
        {/* <Route path="/" element={<div>Home Page</div>} /> */}
        {/* <Route path="/about" element={<About/>} /> */}
        {/* </Routes> */}

        <TextForm />

        {/* <About /> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
