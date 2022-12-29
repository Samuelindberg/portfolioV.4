import React from "react";

import IntroTitle from "./IntroTitle";
import { useEffect, useRef } from "react";

export default function intropage() {
  const desc = useRef(null);
  let hasMoved = useRef(false);
  useEffect(() => {
    if (!hasMoved.current) {
      window.addEventListener("scroll", () => {
        requestAnimationFrame(() => MoveDesc());
        console.log("scrolled");
        hasMoved.current = true;
        console.log(hasMoved.current);
      });
    }
    return () => {
      window.removeEventListener("scroll", MoveDesc());
    };
  }),
    [hasMoved];
  function MoveDesc() {
    // desc.current.style.transform = "translateY(0)";
    desc.current.style.opacity = 1;
  }
  return (
    <section className="intro-section">
      <div className="intro-content">
        <IntroTitle />
        <p ref={desc} id="intro-desc">
          Hej! Jag är en react-utvecklare och grafisk designer. Just nu går jag
          en bootcamp för att utveckla mina förmågor inom webbutveckling. Jag är
          passionerad inom teknik och har både skapat hemsidor och appar i både
          React och Vanilla Javascript. <br /> <br />
          Jag har brunnit för teknik sen jag var tolv och byggde min första
          dator. Sedan dess har intresset bara växt sig starkare, och min fritid
          har fyllts av att lära sig mer om allt som har med teknik att göra. På
          senare år har jag också blivit intresserad och jobbat med grafisk
          design en del.
        </p>
      </div>
    </section>
  );
}
