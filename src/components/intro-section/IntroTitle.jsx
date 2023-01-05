import { useEffect, useRef, React } from "react";
import profileimg from "../../assets/profile.png";
export default function IntroTextContent() {
  // const graphicTitle = useRef(null);
  // let hasMoved = useRef(false);
  // useEffect(() => {
  //   if (true) {
  //     window.addEventListener("scroll", () => {
  //       requestAnimationFrame(() => showGraphic());
  //       hasMoved.current = true;
  //       console.log(hasMoved.current);
  //     });
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", showGraphic());
  //   };
  // }),
  // [hasMoved];
  // function showGraphic() {
  //   graphicTitle.current.style.opacity = 1;
  // }
  return (
    <div className="intro-title-content">
      <img src={profileimg} id="profile-pic" alt="profile-pic" />
      <div className="nameContainer">
        <h1 id="name">SAMUEL LINDBERG</h1>
        <h2 id="juniordev">Junior Software Developer</h2>
        {/* <h2 ref={graphicTitle} id="graphic-title">
          and Graphic Designer!
        </h2> */}
      </div>
    </div>
  );
}
