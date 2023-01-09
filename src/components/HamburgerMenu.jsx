import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLinks = useRef(null);
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      hamburgerLinks.current.style.display = "flex";
      hamburgerLinks.current.style.transform = "scale(1)";
      bar1.current.style.transform = "rotate(45deg) translate(4px,10px)";
      bar2.current.style.opacity = 0;
      bar3.current.style.transform = "rotate(-45deg) translate(6px,-12px)";
    } else {
      hamburgerLinks.current.style.display = "none";
      bar1.current.style.transform = "rotate(0) translate(0)";
      bar2.current.style.opacity = 1;
      bar3.current.style.transform = "rotate(0) translate(0)";
    }
  }, [isOpen, setIsOpen]);
  return (
    <nav className="hamburger-nav">
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div ref={bar1} className="hamburger-bar"></div>
        <div ref={bar2} className="hamburger-bar"></div>
        <div ref={bar3} className="hamburger-bar"></div>
      </div>
      <div ref={hamburgerLinks} className="hamburger-links">
        <Link to="/contact">Contact</Link>
        <Link to="/">Work</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}
