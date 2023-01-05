import React from "react";
import MyoviesFirstRow from "./MyoviesFirstRow";
import MyoviesSecondRow from "./MyoviesSecondRow";

export default function MyoviesSection() {
  return (
    <section className="myovies-section">
      <div className="myovies-container ">
        <h1 id="myovies-title">Myovies </h1>
        <MyoviesFirstRow />
        <p id="myovies-desc">
          A movie database and rating site built with JavaScript. The site
          offers a comprehensive collection of films, provided by a RESTful API.
          Users can rate movies and see their ratings alongside the average
          ratings for each film. The site also features a beautiful and modern
          design, enhanced by CSS animations and transitions. I have carefully
          designed and implemented the site using JavaScript, CSS, and HTML to
          ensure that it is responsive, scalable, and performant."
        </p>
      </div>
    </section>
  );
}
