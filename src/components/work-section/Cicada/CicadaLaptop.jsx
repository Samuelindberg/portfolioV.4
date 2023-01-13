import { React, useState, useRef, useEffect } from "react";
import introScreen from "../../../assets/Cicada/cicada-intro.png";
import menu from "../../../assets/Cicada/cicada-menu.png";
import buffe from "../../../assets/Cicada/cicada-buffe.png";
// import play from "../../../assets/tictactoe-play.png";
export default function TicTacToeLaptop() {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopImageSource = [introScreen, menu, buffe];
  const laptop = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    });
    observer.observe(laptop.current);
    const interval = setInterval(() => {
      if (imageIndex < laptopImageSource.length - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    }, 4000);
    return () => {
      if (!laptop.current) {
        return;
      }
      observer.unobserve(laptop.current);
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      ref={laptop}
      id="cicada-img"
      src={laptopImageSource[imageIndex]}
      alt=""
    />
  );
}
