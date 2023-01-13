import { React, useRef, useEffect } from "react";
import CicadaFirstRow from "./CicadaFirstRow";
import CicadaLaptop from "./CicadaLaptop";
import WorkDesc from "../WorkDesc";
export default function TicTacToeSection() {
  const Section = useRef(null);
  const desc = `Cicada Catering's website is a visually appealing platform that showcases the company's catering services and menu options. It features a cohesive color scheme, a responsive and mobile-friendly layout, and interactive elements implemented using JavaScript and enhanced with CSS. The website is a professional and impressive online presence that effectively promotes the company's catering services.`;
  useEffect(() => {
    let addSize = 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${100}vw`;
          addSize += 1;
        }
      });
    });
    observer.observe(Section.current);
    return () => {
      if (!Section.current) {
        return;
      }
      observer.unobserve(Section.current);
    };
  }, []);
  return (
    <section ref={Section} className="cicada-section">
      <h1 id="cicada-title">Cicada Catering</h1>
      <CicadaLaptop />
      <WorkDesc id="cicada-desc" desc={desc} />
    </section>
  );
}
