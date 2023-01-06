import React from "react";

import AboutMeFirstRow from "./AboutMeFirstRow";
import AboutmeSecondRow from "./AboutmeSecondRow";
import EducationContainer from "./Education/EducationContainer";

export default function AboutmeSection() {
  return (
    <section id="about-me" className="aboutme-section flex-center-column">
      <AboutMeFirstRow />
      <AboutmeSecondRow />
      <EducationContainer />
    </section>
  );
}
