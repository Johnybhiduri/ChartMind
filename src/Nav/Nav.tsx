import "./nav.css";
import {Menu,X, ChartLine} from "lucide-react"
import logo from "../assets/chartmind-logo.png"
import { useState } from "react";

interface NavProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: {
    homeRef: React.RefObject<HTMLDivElement>;
    featuresRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export const Nav:React.FC<NavProps> = ({ scrollToSection, sections }) => {

  const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () =>  {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const navItems = [
    {label: "Home", action: () => scrollToSection(sections.homeRef)},
    {label: "Features", action: () => scrollToSection(sections.featuresRef)},
    {label: "About", action: () => scrollToSection(sections.aboutRef)},
    {label: "Contact", action: () => scrollToSection(sections.contactRef)}
  ]
  
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-bottom-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <div className="h-10 w-10 mt-3 mr-1" >
            <img src={logo} alt="ChartMind Logo" />
            </div>
            <span className="text-xl tracking-tight">ChartMind</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item: any, index: number) => (
              <li key={index}>
                <button onClick={item.action}>{item?.label}</button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md">
              Start for free
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center item-center lg:hidden">
            <ul>
            {navItems.map((item: any, index: number) => (
              <li key={index} className="py-4">
                <button onClick={() => {
                      item.action();
                      toggleNavBar(); // Close mobile menu after clicking
                    }}>{item?.label}</button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 items-center justify-center">
          <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md">
              Start for free
            </a>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};
