import { React, useState, useRef } from "react";
import MyoviesStartpage from "../../../assets/myovies-startpage-laptop.png";
import searchpageLaptop from "../../../assets/myovies-searchpage-laptop.png";
import ratingLaptop from "../../../assets/myovies-ratinglaptop.png";
export default function myoviesLaptop(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopRef = useRef(null);
  const laptopImageSource = [MyoviesStartpage, searchpageLaptop, ratingLaptop];
  setInterval(() => {
    laptopRef.current.style.opacity = 1;
    if (imageIndex < laptopImageSource.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
    // setTimeout(() => {
    //   laptopRef.current.style.opacity = 0;
    // }, 400);
    // laptopRef.current.style.opacity = 1;
  }, 7000);
  return (
    <img
      ref={laptopRef}
      id="myovies-startpage-laptop"
      src={laptopImageSource[imageIndex]}
      alt=""
    />
  );
}
