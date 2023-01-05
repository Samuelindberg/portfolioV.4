import { React, useState } from "react";
import introScreen from "../../../assets/Cicada/cicada-intro.png";
// import play from "../../../assets/tictactoe-play.png";
export default function TicTacToeLaptop() {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopImageSource = [introScreen];
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
