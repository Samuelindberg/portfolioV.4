import React from "react";
import Intropage from "./intro-section/Intropage";
import SkillsPage from "./skills-section/SkillsPage";
import AboutmePage from "./Aboutme-section/AboutmeSection";
import WorkPage from "./work-section/WorkPage";
export default function IntroPageContainer() {
  return (
    <div>
      <Intropage />
      <SkillsPage />
      <WorkPage />
      <AboutmePage />
    </div>
  );
}
