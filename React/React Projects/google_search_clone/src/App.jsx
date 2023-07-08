import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./Components/SearchResult";
import { AppContext } from "./Utils/ContextApi";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/:query/:startIndex" element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
