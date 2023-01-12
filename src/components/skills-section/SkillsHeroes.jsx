import { React, useEffect, useState } from "react";
import css from "../../assets/skills/css.svg";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import html from "../../assets/skills/html.svg";
import illustrator from "../../assets/skills/illustrator.svg";
import indesign from "../../assets/skills/indesign.svg";
import JavaScript from "../../assets/skills/Javascript.png";
import restfulAPI from "../../assets/skills/RestfulAPI.png";
import xd from "../../assets/skills/xd.svg";
import reactImg from "../../assets/skills/react.svg";
export default function SkillsHeroes() {
  const skills = [
    [html, "HTML"],
    [css, "CSS"],
    [reactImg, "ReactJS"],
    [JavaScript, "Javascript"],
    [restfulAPI, "RESTful API"],
    [git, "Git"],
    [github, "Github"],
    [illustrator, "Illustrator"],
    [indesign, "Indesign"],
    [xd, "XD"],
  ];
  return (
    <div className="skills-heroes-content">
      {skills.map((skill, index) => {
        return (
          <div className="skill-heroes-item" key={skill[1]}>
            <img src={skill[0]} alt="" />
            <h1>{skill[1]}</h1>
          </div>
        );
      })}
      <p id="skills-desc">
        As a skilled developer and designer, I have a strong foundation in HTML,
        CSS, JavaScript and React, as well as experience with APIs and popular
        design tools such as Illustrator, Photoshop, and Adobe XD. I have a good
        eye for design, layout, animations, and colors, and I am able to create
        responsive and user-friendly interfaces that are both functional and
        aesthetically pleasing. <br /> Whether building a website from scratch
        or improving the design of an existing site, I am always looking for
        ways to push the boundaries of what is possible and deliver high-quality
        solutions exceed expectations.
      </p>
    </div>
  );
}
