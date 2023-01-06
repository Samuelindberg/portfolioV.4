import React from "react";
import profileImg from "../../assets/profile.jpg";
export default function AboutMeFirstRow() {
  return (
    <div className="aboutme-firstrow">
      <img src={profileImg} alt="" id="aboutme-img" />
      <h1 id="aboutme-title">About Me</h1>
      <p id="aboutme-desc" className="work-desc">
        Hello! I am a passionate react developer and graphic designer. I have
        always been interested in technology and have learned a lot by creating
        websites and apps in both React and Vanilla Javascript. I also have
        experience managing servers and databases, as well as integrating APIs
        for search functions and authentication, such as payment. I have worked
        with both Google Cloud and AWS and have deployed and maintained websites
        on Netlify and vercel.
      </p>
      <p id="aboutme-desc-2" className="work-desc">
        Although I have a lot of knowledge about technology, I don't have much
        practical work experience, but by putting in many hours on both course
        projects and my own websites, I have gained a good understanding of how
        a project works from start to finished result. I have also gained
        experience working with others using Git. One of the projects I have
        created is a website where you can find and rate movies you have
        watched. The website has a stylish design and is intuitive to use, and
        it uses several integrated APIs. My current project is a React website
        for a vintage store, where I have stored the products in a MongoDB
        database that I created and imported information from the ASOS API.{" "}
        <br /> <br />
        In addition to my technical interests, I also have a strong passion for
        graphic design. I have taken a course at Berghs that has taught me a lot
        about how to use typography, color, and layout to strengthen a company's
        visual identity. In my free time, I love cooking and baking, and I enjoy
        experimenting and learning new things by trying out different recipes.
        Thank you for taking the time to get to know me a little!
      </p>
    </div>
  );
}
