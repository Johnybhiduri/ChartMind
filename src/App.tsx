// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Nav } from "./Nav/Nav";
import { Homepage } from "./Homepage/home";
import { Features } from "./Feature/features";
import { About } from "./About/about";
function App() {
  return (
    <>
      <Nav></Nav>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Homepage>
        </Homepage>
        
      </div><Features></Features>
      <About/>
    </>
  );
}

export default App;
