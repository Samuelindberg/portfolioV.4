import React from "react";
import MyoviesFirstRow from "./MyoviesFirstRow";
import MyoviesSecondRow from "./MyoviesSecondRow";

export default function MyoviesSection() {
  return (
    <div className="myovies-container">
      <h1 id="myovies-title">Myovies </h1>
      <MyoviesFirstRow />
      <MyoviesSecondRow />
    </div>
  );
}
