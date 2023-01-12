import { React, useState, useRef, useEffect } from "react";
import MyoviesStartpage from "../../../assets/myovies-startpage-laptop.png";
import searchpageLaptop from "../../../assets/myovies-searchpage-laptop.png";
import ratingLaptop from "../../../assets/myovies-ratinglaptop.png";
import MyoviesPhoneDesc from "../../../assets/myovies-desc-phone.png";
export default function myoviesLaptop(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const laptopRef = useRef(null);
  const laptopImageSource = [MyoviesStartpage, searchpageLaptop, ratingLaptop];
  const phone = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "scale(1)";
          laptopRef.current.style.transform = "translateY(0) scale(1)";
        }
      });
    });
    observer.observe(phone.current);
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
    return () => {
      observer.unobserve(phone.current);
    };
  }, []);

  return (
    <>
      <img
        ref={laptopRef}
        id="myovies-startpage-laptop"
        src={laptopImageSource[imageIndex]}
        alt=""
      />
      <img ref={phone} id="myovies-desc-phone" src={MyoviesPhoneDesc} alt="" />
    </>
  );
}
