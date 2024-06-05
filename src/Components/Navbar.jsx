import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='`navbar pt-0  flex mx-auto    space-x-4  justify-between p-6'>
        <img className='w-28 '  src={logo} alt="Logo" />
<div className="navbar hidden md:flex    ">
          <ul className='nav-items  flex  text-2xl gap-16 items-center text-center'>
            <li>
              <NavLink 
                to="/" 
                onClick={() => handleTabClick("Home")} 
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Home" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                onClick={() => handleTabClick("Blog")} 
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Blog" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/singlepost" 
                onClick={() => handleTabClick("Single Post")} 
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Single Post" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => handleTabClick("About")} 
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "About" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => handleTabClick("Contact")} 
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
            
          </ul>
          </div>

          <div className="  hidden  lg:flex items-center space-x-6">
            <Link to="/signup" className="font-serif text-xl hover:text-blue-600">Signup</Link>
            <Link to="/login" className="font-serif bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
           
          </div>
          
       
        <div className='md:hidden items-center flex cursor-point text-black'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
        </div>
      </div>
       {/* menu items only for mobiles  */}
            {/* mobile responsive */}

      {isMenuOpen && (
        <div className='flex items-end'>
          <ul className='md:hidden flex-col items-center space-y-6 py-6 text-2xl'>
            <li>
              <NavLink 
                to="/" 
                onClick={() => { handleTabClick("Home"); toggleMenu(); }} 
                className={`font-serif hover:text-blue-600 ${activeTab === "Home" ? 'text-blue-600' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                onClick={() => { handleTabClick("Blog"); toggleMenu(); }} 
                className={`font-serif hover:text-blue-600 ${activeTab === "Blog" ? 'text-blue-600' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/singlepost" 
                onClick={() => { handleTabClick("Single Post"); toggleMenu(); }} 
                className={`font-serif hover:text-blue-600 ${activeTab === "Single Post" ? 'text-blue-600' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => { handleTabClick("About"); toggleMenu(); }} 
                className={`font-serif hover:text-blue-600 ${activeTab === "About" ? 'text-blue-600' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => { handleTabClick("Contact"); toggleMenu(); }} 
                className={`font-serif hover:text-blue-600 ${activeTab === "Contact" ? 'text-blue-600' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
           
            <Link to="/signup" className="font-serif  hover:text-blue-600">Signup</Link>
            </li>
            <li>
            
            <Link to="/login" className="font-serif bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
           
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;






