import { React } from "react";

export default function EducationCard(props) {
  return (
    <>
      <img src={props.img} alt="" className="education-logo" />
      <h1 className="education-name">{props.name}</h1>
      <h2 className="education-course">{props.course}</h2>
      <p className="education-desc">{props.desc}</p>
    </>
  );
}
