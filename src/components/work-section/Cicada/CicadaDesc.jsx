import { React, useEffect, useRef } from "react";

export default function CicadaDesc() {
  const desc = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("works");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          console.log("yup");
        }
      });
    });
    observer.observe(desc.current);
    return () => {
      observer.unobserve(desc.current);
    };
  }, []);
  return (
    <p ref={desc} id="cicada-desc" className="work-desc">
      A movie database and rating site built with JavaScript. The site offers a
      comprehensive collection of films, provided by a RESTful API. Users can
      rate movies and see their ratings alongside the average ratings for each
      film. The site also features a beautiful and modern design, enhanced by
      CSS animations and transitions. I have carefully designed and implemented
      the site using JavaScript, CSS, and HTML to ensure that it is responsive,
      scalable, and performant."
    </p>
  );
}
