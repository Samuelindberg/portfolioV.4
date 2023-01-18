import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav id="nav-bar">
      <div id="nav-a">
        <Link id="nav-work" to="/#worksection">
          Work
        </Link>
        <Link to="/#about-me">About me</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div id="nav-icons">
        <a
          href="https://www.linkedin.com/in/samuel-lindberg-638404249/"
          target="_blank"
          id="linkedinlink"
        >
          {" "}
          <img src={linkedin} alt="" />
        </a>
        <a
          id="githublink"
          href="https://github.com/samuelindberg"
          target="_blank"
        >
          <img src={github} alt="" />
        </a>
      </div>
    </nav>
  );
}
