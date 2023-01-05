import { React, useRef, useEffect } from "react";
import TicTacToeFirstRow from "./CicadaFirstRow";
export default function TicTacToeSection() {
  const Section = useRef(null);
  useEffect(() => {
    let addSize = 0;
    const observer = new IntersectionObserver((entries) => {
      console.log("works");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${100}vw`;
          console.log(addSize);
          addSize += 1;
        }
      });
    });
    observer.observe(Section.current);
    return () => {
      observer.unobserve(Section.current);
    };
  }, []);
  return (
    <section ref={Section} className="cicada-section flex-center-column ">
      <h1 id="cicada-title">Cicada Catering</h1>
      <TicTacToeFirstRow />
    </section>
  );
}
