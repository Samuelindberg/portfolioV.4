import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav id="nav-bar">
      <div id="nav-a">
        <a id="nav-work" href="#myovies-title">
          Work
        </a>
        <a href="#about-me">About me</a>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="nav-icons">
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
      </div>
    </nav>
  );
}
