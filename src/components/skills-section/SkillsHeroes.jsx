import React from "react";
import css from "../../assets/skills/css.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import html from "../../assets/skills/html.png";
import illustrator from "../../assets/skills/illustrator.png";
import indesign from "../../assets/skills/indesign.png";
import JavaScript from "../../assets/skills/Javascript.png";
import restfulAPI from "../../assets/skills/RestfulAPI.png";
import xd from "../../assets/skills/xd.png";
import reactImg from "../../assets/skills/react.svg";
export default function SkillsHeroes() {
  const skills = [
    [css, "CSS"],
    [git, "Git"],
    [github, "Github"],
    [html, "HTML"],
    [illustrator, "Illustrator"],
    [indesign, "Indesign"],
    [JavaScript, "Javascript"],
    [restfulAPI, "RESTful API"],
    [xd, "XD"],
    [reactImg, "ReactJS"],
  ];
  return (
    <div className="skills-heroes-content">
      {skills.map((skill) => (
        <div className="skill-heroes-item" key={skill[1]}>
          <img src={skill[0]} alt="" />
          <h1>{skill[1]}</h1>
        </div>
      ))}
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
