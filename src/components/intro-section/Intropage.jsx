import { useEffect, useRef, React } from "react";
import IntroTitle from "./IntroTitle";
export default function intropage() {
  const desc = useRef(null);
  let hasMoved = useRef(false);
  useEffect(() => {
    if (!hasMoved.current) {
      window.addEventListener("scroll", () => {
        requestAnimationFrame(() => MoveDesc());
        hasMoved.current = true;
      });
    }
    return () => {
      window.removeEventListener("scroll", MoveDesc());
    };
  }),
    [hasMoved];
  function MoveDesc() {
    desc.current.style.opacity = 1;
    desc.current.style.color = "#494949";
  }
  return (
    <section className="intro-section flex-center-column">
      <div className="intro-content">
        <IntroTitle />
        <p ref={desc} id="intro-desc">
          Hi! I am a React developer and graphic designer. I have an internship
          at Spark Plugin and am attending a Bootcamp to further develop my web
          development skills. I am passionate about technology and have created
          websites and apps using both React and Vanilla Javascript. <br /> I
          have been interested in technology since I was twelve years old and
          built my first computer. Since then, my interest has only grown
          stronger, and I have spent my free time learning more about all things
          related to technology. In recent years, I have also become interested
          in and worked with graphic design.
        </p>
      </div>
    </section>
  );
}
