import React from "react";
import MyoviesStartpage from "./assets/myovies-startpage-laptop.png";
import MyoviesPhoneDesc from "./assets/myovies-desc-phone.png";
export default function MyoviesSection() {
  return (
    <div className="myovies-container">
      <h1 id="myovies-title">Myovies </h1>
      <div className="myovies-firstrow">
        <img id="myovies-startpage-laptop" src={MyoviesStartpage} alt="" />
        <img id="myovies-desc-phone" src={MyoviesPhoneDesc} alt="" />
      </div>
    </div>
  );
}
