import React from "react";
import profileimg from "../../assets/profile.png";
export default function ContactIntro() {
  return (
    <div className="contact-title-content">
      <img src={profileimg} id="profile-pic" alt="profile-pic" />
      <div className="nameContainer">
        <h1 id="name">SAMUEL LINDBERG</h1>
        <h2 id="juniordev">Junior Software Developer</h2>
      </div>
    </div>
  );
}
