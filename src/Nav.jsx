import React from "react";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
export default function Nav() {
  return (
    <nav id="nav-bar">
      <div id="nav-a">
        <a href="#myovies-title">WORK</a>
        <a href="">ABOUT ME</a>
        <a href="">CONTACT ME</a>
      </div>
      <div id="nav-icons">
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
      </div>
    </nav>
  );
}
