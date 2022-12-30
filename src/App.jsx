import "./App.css";
import Nav from "./Nav";
import Intropage from "./Intropage";
import SkillsPage from "./SkillsPage";
import { useRef, useEffect } from "react";
import WorkPage from "./WorkPage";
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
