import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import { ShopContext } from "./Context/ShopContext";

function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
