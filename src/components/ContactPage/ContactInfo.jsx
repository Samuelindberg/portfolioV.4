import React from "react";
import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import paperplane from "../../assets/paperplane.svg";
import phone from "../../assets/phone.svg";
export default function ContactInfo() {
  const contactInfo = [
    ["phone", "0721879930", phone],
    [
      "mail",
      "Samuel.lindberg01@icloud.com",
      paperplane,
      "mailto:samuel.lindberg01@icloud.com",
    ],
    ["github", "Samuelindberg", github, "https://github.com/Samuelindberg"],
    [
      "linkedIn",
      "Samuel Lindberg",
      linkedIn,
      "https://www.linkedin.com/in/samuel-lindberg-638404249/",
    ],
  ];
  return (
    <div className="contact-info-container">
      <h1 id="contact-title">Contact Me</h1>
      {contactInfo.map((item) => {
        return (
          <a key={item[0]} target="_blank" href={item[3]}>
            <div className="contact-info" key={item[0]}>
              <img className="contact-icon" src={item[2]} alt="" />
              <h2 className="contact-info-title">{item[0]}</h2>
              <h3 className="contact-info-text">{item[1]}</h3>
            </div>
          </a>
        );
      })}
    </div>
  );
}
