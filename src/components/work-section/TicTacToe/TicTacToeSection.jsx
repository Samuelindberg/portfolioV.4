import { React, useRef, useEffect } from "react";
import TicTacToeFirstRow from "./TicTacToeFirstRow";
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
    <section ref={Section} className="tictactoe-section flex-center-column ">
      <h1 id="tictactoe-title">Tic Tac Toe</h1>
      <TicTacToeFirstRow />
    </section>
  );
}
