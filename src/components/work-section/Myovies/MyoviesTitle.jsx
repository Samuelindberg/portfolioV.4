import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const title = [
    `<span class="myovies-ovies">O</span>`,
    `<span class="myovies-ovies">V</span>`,
    `<span class="myovies-ovies">I</span>`,
    `<span class="myovies-ovies">E</span>`,
    `<span class="myovies-ovies">S</span>`,
  ];
  const titleRef = useRef(null);
  let index = 0;
  useEffect(() => {}, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const showLetters = setInterval(() => {
            if (index < title.length) {
              entry.target.innerHTML += title[index];
              index++;
            } else {
              clearInterval(showLetters);
            }
          }, 400);
        }
      });
    });
    observer.observe(titleRef.current);
    return () => {
      observer.unobserve(titleRef.current);
    };
  }, []);
  return (
    <h1 ref={titleRef} id="myovies-title">
      <span id="myovies-my">My</span>
    </h1>
  );
}
