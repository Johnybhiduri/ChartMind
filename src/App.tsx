import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./Nav/Nav";
import { Homepage } from "./Homepage/home";
import { Features } from "./Feature/features";
import { About } from "./About/About";
import { Contact } from "./Contact/contact";
import { Footer } from "./Nav/Footer";
import { Terms } from "./Terms/Terms";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Nav
        scrollToSection={scrollToSection}
        sections={{ homeRef, featuresRef, aboutRef, contactRef }}
      />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Routes>
          {/* Route for Homepage */}
          <Route
            path="/"
            element={
              <>
                <div ref={homeRef}>
                  <Homepage />
                </div>
                <div ref={featuresRef}>
                  <Features />
                </div>
                <div ref={aboutRef}>
                  <About />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
              </>
            }
          />
          {/* Route for Terms */}
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer
        scrollToSection={scrollToSection}
        sections={{ homeRef, featuresRef, aboutRef, contactRef }}
      />
    </Router>
  );
}

export default App;
