import { React, useRef, useEffect } from "react";
import TicTacToeFirstRow from "./TicTacToeFirstRow";
import TicTacToeLaptop from "./TicTacToeLaptop";
import WorkDesc from "../WorkDesc";
export default function TicTacToeSection() {
  const Section = useRef(null);
  const desc = useRef(null);
  const descContent = `I am proud to present a web-based tic tac toe game that I have created using HTML, JavaScript, and CSS. The user interface is visually appealing, with smooth transitions and animations that enhance the overall user experience. Players can customize the colors of their pieces, which adds a personal touch to the game and allows players to express themselves through their choices.

    The game is designed to be responsive, meaning that it can be played on any device with a modern web browser. This means that players can enjoy the game on their laptops, tablets, or smartphones, without having to worry about compatibility issues.`;
  useEffect(() => {
    let addSize = 0;
    const observer = new IntersectionObserver((entries) => {
      console.log("works");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `100vw`;
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
      <TicTacToeLaptop />
      <WorkDesc id="tictactoe-desc" desc={descContent} />
    </section>
  );
}
