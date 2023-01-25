import { React, useEffect, useRef } from "react";
import MyoviesFirstRow from "./MyoviesFirstRow";
import MyoviesTitle from "./MyoviesTitle";
import WorkDesc from "../WorkDesc";
import WorkButtons from "../WorkButtons";

export default function MyoviesSection() {
  const myoviesImgRef = useRef(null);
  const desc = `      A movie database and rating site built with JavaScript. The site offers a
  comprehensive collection of films, provided by a RESTful API. Users can
  rate movies and see their ratings alongside the average ratings for each
  film. The site also features a beautiful and modern design, enhanced by
  CSS animations and transitions. I have carefully designed and implemented
  the site using JavaScript, CSS, and HTML to ensure that it is responsive,
  scalable, and performant.`;
  return (
    <section className="myovies-section flex-center-column">
      <div className="myovies-container ">
        <MyoviesTitle />
        <MyoviesFirstRow myoviesRef={myoviesImgRef} />
        <WorkButtons
          name="myovies"
          githuburl="https://github.com/Samuelindberg/movieratings"
          siteurl="https://movieratings.vercel.app"
          color="#FF983F"
        />
        <WorkDesc id="myovies-desc" desc={desc} />
      </div>
    </section>
  );
}
