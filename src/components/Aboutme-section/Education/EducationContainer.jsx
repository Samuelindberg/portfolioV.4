import { React, useRef, useEffect, useState } from "react";
import EducationCard from "./EducationCard";
import techover from "../../../assets/techover.png";
import berghs from "../../../assets/berghs_logo.png";
import lund from "../../../assets/lund.png";

export default function EducationContainer() {
  const educationItems = [
    [
      "Techover Academy",
      techover,
      "I am participating in an intensive bootcamp at Techover Academy in programming, where I am learning the fundamentals of various programming languages and developing my skills in the field. The bootcamp is very comprehensive and is giving me a solid foundation to stand on when it comes to programming. I have also learned about various techniques and tools used in the industry and gained a deeper understanding of how different systems and programs work.",
      "Software-developing Bootcamp",
    ],
    [
      "Berghs School of Communication",
      berghs,
      "The course focused on developing the ability to create a strong and recognizable visual identity for companies and brands. The course involved studying typography and color theory, and learning how to use various tools to communicate ideas and present them in different ways. This has given me a basic understanding of how to create a visual identity that can help a company or brand stand out in the market and be easily recognized.",
      "Visual Design Professional",
    ],
    [
      "Lunds University",
      lund,
      "Art history and visual studies was a course that focused on providing a deep understanding of how design has evolved over time and how it impacts us in our daily lives. By studying different periods, we learned about various artistic techniques and mediums, as well as how art has reflected society throughout history.",
      "Art History And Visual Studies",
    ],
  ];
  //   const item = useRef(null);
  //   const item0 = useRef(null);
  //   const item1 = useRef(null);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.style.transform = "translateX(0)";
  //         }
  //       });
  //     });
  //     observer.observe(item1.current);
  //     return () => {
  //       observer.unobserve(item1.current);
  //     };
  //   }, []);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.style.transform = "translateX(0)";
  //         }
  //       });
  //     });
  //     observer.observe(item2.current);
  //     return () => {
  //       observer.unobserve(item2.current);
  //     };
  //   }, []);

  return (
    <div className="education-container flex-center-column">
      <h1 id="education-title">My Education</h1>
      {educationItems.map((school, index) => {
        if (index % 2 === 0) {
          return (
            <div
              //   ref={"item" + index}
              key={school[0]}
              className="education-item education-item-left"
            >
              <EducationCard
                name={school[0]}
                img={school[1]}
                desc={school[2]}
                course={school[3]}
              />
            </div>
          );
        } else {
          return (
            <div
              className="education-item education-item-right"
              key={school[0]}
            >
              <EducationCard
                name={school[0]}
                img={school[1]}
                desc={school[2]}
                course={school[3]}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
