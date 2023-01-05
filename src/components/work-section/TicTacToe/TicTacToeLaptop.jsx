import { React, useState } from "react";
import input from "../../../assets/tictactoe/tictactoe-input.png";
import playscreen from "../../../assets/tictactoe/tictactoe-play.png";
import winscreen from "../../../assets/tictactoe/tictactoe-winscreen.png";
// import play from "../../../assets/tictactoe-play.png";
export default function TicTacToeLaptop() {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopImageSource = [input, playscreen, winscreen];
  setInterval(() => {
    if (imageIndex < laptopImageSource.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }, 4000);
  return (
    <div className="tictactoe-firstrow">
      {<img id="tictactoe-img" src={laptopImageSource[imageIndex]} alt="" />}
    </div>
  );
}
