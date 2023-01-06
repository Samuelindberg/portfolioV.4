import React from "react";
import MyoviesSection from "./Myovies/MyoviesSection";
import TicTacToeSection from "./TicTacToe/TicTacToeSection";
import CicadaSection from "./Cicada/CicadaSection";

export default function WorkPage() {
  return (
    <section className="work-section flex-center-column">
      <h1 id="worktitle">WORK</h1>
      <MyoviesSection />
      <CicadaSection />
      <TicTacToeSection />
    </section>
  );
}
