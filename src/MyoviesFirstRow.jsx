import { React, useState, useRef } from "react";
import MyoviesStartpage from "./assets/myovies-startpage-laptop.png";
import MyoviesPhoneDesc from "./assets/myovies-desc-phone.png";
import searchpageLaptop from "./assets/myovies-searchpage-laptop.png";
import ratingLaptop from "./assets/myovies-ratinglaptop.png";
export default function MyoviesFirstRow() {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopImageSource = [MyoviesStartpage, searchpageLaptop, ratingLaptop];
  setInterval(() => {
    if (imageIndex < laptopImageSource.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }, 4000);
  return (
    <div className="myovies-firstrow">
      <img
        id="myovies-startpage-laptop"
        src={laptopImageSource[imageIndex]}
        alt=""
      />
      <img id="myovies-desc-phone" src={MyoviesPhoneDesc} alt="" />
    </div>
  );
}
