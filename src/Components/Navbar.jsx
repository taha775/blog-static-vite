import React, { useState } from 'react';
import logoLight from "../assets/logo.png"; // Light mode logo
import logoDark from "../assets/light.png"; // Dark mode logo
import { SiDarkreader  } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from '../../ThemeContext.jsx';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
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
     
      <div className={`navbar pt-0 flex mx-auto space-x-4 ${theme === 'dark' ? 'dark:bg-black' : ''} justify-between p-6`}>
        <img className='w-28'  src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
        <div className="navbar hidden md:flex">
          <ul className='nav-items flex text-2xl gap-16 items-center text-center'>
            <li>
              <NavLink
                to="/"
                onClick={() => handleTabClick("Home")}
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Home" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => handleTabClick("Blog")}
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Blog" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singlepost"
                onClick={() => handleTabClick("Single Post")}
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Single Post" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => handleTabClick("About")}
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "About" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-serif hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/signup" className={`font-serif text-xl hover:text-blue-600 ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
          <Link to="/login" className="font-serif bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
        </div>
        <div className='flex items-center justify-center'>
        <button onClick={toggleTheme} className="flex items-center">
        <SiDarkreader  size={30} color={theme === "dark" ? "white" : "black"} />
        
      </button>
        </div>

        <div className='md:hidden items-center flex cursor-pointer text-black'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
        </div>
      </div>
      {/* Menu items only for mobiles */}
      {isMenuOpen && (
        <div className='flex items-end'>
          <ul className='md:hidden flex-col items-center space-y-6 py-6 text-2xl'>
            <li>
              <NavLink
                to="/"
                onClick={() => { handleTabClick("Home"); toggleMenu(); }}
                className={`font-serif hover:text-blue-600 ${activeTab === "Home" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => { handleTabClick("Blog"); toggleMenu(); }}
                className={`font-serif hover:text-blue-600 ${activeTab === "Blog" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singlepost"
                onClick={() => { handleTabClick("Single Post"); toggleMenu(); }}
                className={`font-serif hover:text-blue-600 ${activeTab === "Single Post" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => { handleTabClick("About"); toggleMenu(); }}
                className={`font-serif hover:text-blue-600 ${activeTab === "About" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => { handleTabClick("Contact"); toggleMenu(); }}
                className={`font-serif hover:text-blue-600 ${activeTab === "Contact" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/signup" className={`font-serif hover:text-blue-600 ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
            </li>
            <li>
              <Link to="/login" className="font-serif bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
