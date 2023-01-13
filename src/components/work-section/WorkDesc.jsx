import { React, useRef, useEffect } from "react";

export default function WorkDesc(props) {
  const desc = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    });
    observer.observe(desc.current);
    return () => {
      if (!desc.current) {
        return;
      }
      observer.unobserve(desc.current);
    };
  }, []);
  return (
    <p ref={desc} id={props.id} className="work-desc">
      {props.desc}
    </p>
  );
}
