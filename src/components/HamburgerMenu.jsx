import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLinks = useRef(null);
  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      hamburgerLinks.current.style.display = "flex";
      hamburgerLinks.current.style.transform = "scale(1)";
    } else {
      hamburgerLinks.current.style.display = "none";
    }
  }, [isOpen, setIsOpen]);
  return (
    <nav className="hamburger-nav">
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
      <div ref={hamburgerLinks} className="hamburger-links">
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Work</Link>
      </div>
    </nav>
  );
}
