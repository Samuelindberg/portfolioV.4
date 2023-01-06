import { React } from "react";
import MyoviesLaptop from "./MyoviesLaptop";
import MyoviesPhoneDesc from "../../../assets/myovies-desc-phone.png";

export default function MyoviesFirstRow(props) {
  return (
    <div className="myovies-firstrow">
      <MyoviesLaptop myoviesimgref={props.myoviesRef} />
      <img id="myovies-desc-phone" src={MyoviesPhoneDesc} alt="" />
    </div>
  );
}
