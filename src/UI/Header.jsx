import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 h-20 flex items-center justify-between w-full">
      <div className="flex items-center ml-28">
        <img className="h-20" src="./logo.png" alt="Logo" srcset="" />
        <div className="p-40 space-x-14">
          <Router>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/">
              Projects
            </NavLink>
            <NavLink exact to="/">
              Home Service
            </NavLink>
            <NavLink exact to="/">
              Marketplace
            </NavLink>
            <NavLink exact to="/">
              About Us
            </NavLink>
          </Router>
        </div>
        <div>
          <button style={{outline:"2px solid green"}} className="outline-green text-green-700 font-bold bg-transparent hover:bg-green-700 hover:text-white py-2 px-4 rounded transition-all duration-300 ease-in-out">
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
