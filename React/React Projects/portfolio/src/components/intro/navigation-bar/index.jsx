import React, { useState } from "react";
import "./style.scss";
import logo from "../../../images/logo.png";
import CallToAction from "../shared/CallToAction";
import { scrollToSection } from "../../utils/helper";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="" />
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className="navigation">
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Blogs & Articles
        </span>
        <CallToAction
          text={"Contact Me"}
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </div>
  );
}

export default Navigation;
