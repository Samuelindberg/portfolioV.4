import React from "react";
import css from "./assets/skills/css.png";
import git from "./assets/skills/git.png";
import github from "./assets/skills/github.png";
import html from "./assets/skills/html.png";
import illustrator from "./assets/skills/illustrator.png";
import indesign from "./assets/skills/indesign.png";
import Javascript from "./assets/skills/Javascript.png";
import restfulAPI from "./assets/skills/RestfulAPI.png";
import xd from "./assets/skills/xd.png";
const skills = [css, "CSS"];
export default function SkillsHeroes() {
  return (
    <div className="skills-heroes-content">
      {skills.map((image) => (
        <div className="image-container" key={image[1]}>
          <h1>{image[1]}</h1>
          <img src={image[0]} alt="" />
        </div>
      ))}
    </div>
  );
}
