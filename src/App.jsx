import "./App.css";
import Nav from "./Nav";
import Intropage from "./Intropage";
import SkillsPage from "./SkillsPage";
import { useRef, useEffect } from "react";
function App() {
  const skillsSection = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    observer.observe(skillsSection.current);

    return () => {
      observer.unobserve(skillsSection.current);
    };
  }, []);
  return (
    <div className="App">
      <Nav />
      <Intropage />
      <div ref={skillsSection}>
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
