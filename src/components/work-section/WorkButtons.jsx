import React from "react";

export default function WorkButtons(props) {
  return (
    <div className="work-buttons">
      <a
        className="work-site-buttons work-button"
        id={props.name + "-button"}
        href={props.siteurl}
        target="_blank"
        style={{ backgroundColor: props.color, color: "white" }}
      >
        Site!
      </a>
      <a
        className="work-github-buttons  work-button"
        href={props.githuburl}
        target="_blank"
        style={{ borderColor: props.color, color: props.color }}
        id={props.name + "-github-button"}
      >
        Github Repo!
      </a>
    </div>
  );
}
