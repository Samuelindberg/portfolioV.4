import { React } from "react";
import MyoviesLaptop from "./MyoviesLaptop";
import MyoviesPhoneDesc from "../../../assets/myovies-desc-phone.png";

export default function MyoviesFirstRow() {
  return (
    <div className="myovies-firstrow">
      <MyoviesLaptop />
      <img id="myovies-desc-phone" src={MyoviesPhoneDesc} alt="" />
    </div>
  );
}
