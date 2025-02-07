import "./nav.css";
import React from "react";
import { Menu, X } from "lucide-react";
// @ts-ignore
import logo from "../assets/chartmind-logo.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: {
    homeRef: React.RefObject<HTMLDivElement>;
    featuresRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export const Nav: React.FC<NavProps> = ({ scrollToSection, sections }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavigation = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionRef), 100); // Wait for navigation to complete
    } else {
      scrollToSection(sectionRef);
    }
  };

  const navItems = [
    { label: "Home", action: () => handleNavigation(sections.homeRef) },
    { label: "Features", action: () => handleNavigation(sections.featuresRef) },
    { label: "About", action: () => handleNavigation(sections.aboutRef) },
    { label: "Contact", action: () => handleNavigation(sections.contactRef) },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-bottom-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <div className="h-10 w-10 mt-3 mr-1">
              <img src={logo} alt="ChartMind Logo" />
            </div>
            <span className="text-xl tracking-tight">ChartMind</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button onClick={item.action}>{item.label}</button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={() => navigate("/demo")}
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md"
            >
              Start for free
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center item-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => {
                      item.action();
                      toggleNavBar();
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 items-center justify-center">
              <button
                onClick={() => navigate("/demo")}
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md"
              >
                Start for free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
