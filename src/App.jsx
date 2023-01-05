import "./App.css";
import Nav from "./components/Nav";
import Intropage from "./components/intro-section/Intropage";
import SkillsPage from "./components/skills-section/SkillsPage";
import { useRef, useEffect } from "react";
import WorkPage from "./components/work-section/WorkPage";
function App() {
  const skillsSection = useRef(null);

  return (
    <div className="App">
      <Nav />
      <Intropage />
      <div ref={skillsSection}>
        <SkillsPage />
        <WorkPage />
      </div>
    </div>
  );
}

export default App;
