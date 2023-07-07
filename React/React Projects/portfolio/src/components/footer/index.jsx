import React from "react";
import Section from "../intro/shared/section";
import Logo from "../../images/logo.png";
import "./style.scss";
import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";

const Footer = () => {
  return (
    <Section background={"dark"} className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blog & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            className="social-icon"
            color={"#ff0000"}
            icon={<FaYoutube />}
            link={"#"}
          />
          <SocialIcon
            className="social-icon"
            color={"#0d2636"}
            icon={<FaGithub />}
            link={"#"}
          />
          <SocialIcon
            className="social-icon"
            color={"#0a66c2"}
            icon={<FaLinkedinIn />}
            link={"#"}
          />
          <SocialIcon
            className="social-icon"
            color={"#f2740d"}
            icon={<FaStackOverflow />}
            link={"#"}
          />
          <SocialIcon
            className="social-icon"
            color={"#e84c88"}
            icon={<FaInstagram />}
            link={"#"}
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2023 | Made By Kabir Ahmed
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
