import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/public/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
