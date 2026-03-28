import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const NavBar = () => {

  const {toggle,setToggle} = useContext(SessionContext);

  console.log(toggle);
  
  
  

  return (
    <nav className="max-w-7xl mx-auto rounded-2xl px-8 py-4 flex items-center justify-between 
    bg-[#0b1e2d]/90 backdrop-blur-md border-b border-white/10 shadow-lg">

      {/* Logo */}
      <div className="text-xl font-bold text-white tracking-wide">
        <span className="text-orange-400">Study</span>Flow
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
        <span className="hover:text-orange-400 cursor-pointer transition duration-200">
          Home
        </span>
        <span className="hover:text-orange-400 cursor-pointer transition duration-200">
          Workdir
        </span>
        <span className="hover:text-orange-400 cursor-pointer transition duration-200">
          Kodex
        </span>
      </div>

      
      <button className="px-5 py-2.5 rounded-xl bg-orange-400 text-[#0b1e2d] font-semibold 
      hover:bg-orange-300 transition duration-200 shadow-md hover:shadow-orange-400/30" onClick={()=>toggle?setToggle(false):setToggle(true)}>
        + New Session
      </button>

    </nav>
  );
};

export default NavBar;