import { React, useEffect, useRef } from "react";
import SkillsHeroes from "./SkillsHeroes";
export default function SkillsPage() {
  const Title = useRef(null);
  const skillsSection = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = 1;
        }
      });
    });
    observer.observe(Title.current);
    return () => {
      observer.unobserve(Title.current);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("funkar");
            skillsSection.current.style.transform = "translateX(0)";
            skillsSection.current.style.opacity = 1;
          }
        });
      },
      { rootMargin: "-100px" }
    );
    observer.observe(skillsSection.current);

    return () => {
      observer.unobserve(skillsSection.current);
    };
  }, []);
  return (
    <section ref={skillsSection} className="skills-section">
      <h1 ref={Title} id="skills-title">
        MY SKILLS AND TOOLS
      </h1>
      <SkillsHeroes />
    </section>
  );
}
