import { React, useState } from "react";
import introScreen from "../../../assets/Cicada/cicada-intro.png";
import menu from "../../../assets/Cicada/cicada-menu.png";
import buffe from "../../../assets/Cicada/cicada-buffe.png";
// import play from "../../../assets/tictactoe-play.png";
export default function TicTacToeLaptop() {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopImageSource = [introScreen, menu, buffe];
  setInterval(() => {
    if (imageIndex < laptopImageSource.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }, 4000);
  return (
    <div className="cicada-firstrow">
      {<img id="cicada-img" src={laptopImageSource[imageIndex]} alt="" />}
    </div>
  );
}
