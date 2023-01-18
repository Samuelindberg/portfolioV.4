import "./App.css";
import Nav from "./components/Nav";
import HamburgerMenu from "./components/HamburgerMenu";
import IntroPageContainer from "./components/intro-section/IntroPageContainer";
import ContactErrorHandling from "./components/ContactPage/ContactErrorHandling";
import ContactPage from "./components/ContactPage/ContactPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
function App() {
  const skillsSection = useRef(null);
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash !== "") {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 10);
    }
  }, [{ pathname, hash, key }]);
  return (
    <div className="App">
      <Nav />
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<IntroPageContainer />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
