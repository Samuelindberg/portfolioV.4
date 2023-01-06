import { React } from "react";
import MyoviesLaptop from "./MyoviesLaptop";

export default function MyoviesFirstRow(props) {
  return (
    <div className="myovies-firstrow">
      <MyoviesLaptop myoviesimgref={props.myoviesRef} />
    </div>
  );
}
