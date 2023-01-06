import "./App.css";
import Nav from "./components/Nav";
import IntroPageContainer from "./components/IntroPageContainer";
import ContactPage from "./components/ContactPage/ContactPage";
import { Route, Routes } from "react-router-dom";
import { useRef, useEffect } from "react";
function App() {
  const skillsSection = useRef(null);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<IntroPageContainer />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
