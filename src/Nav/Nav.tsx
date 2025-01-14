import "./nav.css";

import {Menu,X, ChartLine} from "lucide-react"
// import logo from "../assets/chartmind.png"
import { useState } from "react";
export const Nav = () => {

  const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () =>  {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const navItems = [
    {label: "Home", href: '#'},
    {label: "Features", href: '#'},
    {label: "About", href: '#'},
    {label: "Contact", href: '#'}
  ]
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-bottom-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <div className="h-10 w-10  mt-3" >
            <ChartLine size={25}/>
            </div>
            <span className="text-xl tracking-tight">ChartMind</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item: any, index: number) => (
              <li key={index}>
                <a href={item?.href}>{item?.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md">
              Demo
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
                <a href={item?.href}>{item?.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 items-center justify-center">
          <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md">
              Demo
            </a>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};
