import React, { useState } from 'react';
import logoLight from "../assets/logo.png"; // Light mode logo
import logoDark from "../assets/light.png"; // Dark mode logo
import { SiDarkreader  } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'; // Importing Redux hooks
import { toggleTheme } from '../store/slices/themeslice';

const Navbar = ({showNavbar}) => {
  const { theme } = useSelector(state => state.theme); // Accessing theme state from Redux  state jo ha store sa get hogi 
  // const themeData = useSelector(state => state.theme); // Accessing theme state from Redux
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleToggleTheme = () => {
    dispatch(toggleTheme()); // Dispatching toggleTheme action from Redux
  };
  

  return (
    <div >
     
      <div className={`navbar pt-0 flex  mx-auto space-x-4 ${theme === 'dark' ? 'dark:bg-black' : ''} justify-around p-6`}>
        <img className='w-28'  src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
        <div className="navbar hidden md:flex ">
          <ul className='nav-items flex  text-2xl gap-6 items-center text-center'>
            <li>
              
              

              <NavLink
                to="/"
                onClick={() => handleTabClick("Home")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Home" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/blog"
                onClick={() => handleTabClick("Blog")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Blog" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/singlepost"
                onClick={() => handleTabClick("Single Post")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Single Post" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/about"
                onClick={() => handleTabClick("About")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "About" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                About
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Health
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-sans hover:text-blue-600 hover:border-b-2 hover:border-blue-600 ${activeTab === "Contact" ? 'text-blue-600 border-b-2 border-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Buisness
              </NavLink>
            </li>
            
          </ul>
        </div>

      
        <div className='flex items-center justify-center'>
        <div className="hidden lg:flex items-center space-x-6  ">
          <Link to="/signup" className={`font-sans text-2xl hover:text-blue-600 ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
          <Link to="/login" className="font-sans text-2xl bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
        </div>
        <button onClick={handleToggleTheme} className="flex items-center ">
        <SiDarkreader  size={35} color={theme === "dark" ? "white" : "black"} />
        
      </button>
        </div>

        <div className={`md:hidden items-center flex cursor-pointer  ${theme ==="dark"? 'text-whte' : 'text-black'}`}>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-10 h-10"  color={theme === "dark" ? "white" : "black"} /> : <FaBars   color={theme === "dark" ? "white" : "black"} className="w-10 h-10" />}
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
                className={`font-sans hover:text-blue-600 ${activeTab === "Home" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => { handleTabClick("Blog"); toggleMenu(); }}
                className={`font-sans hover:text-blue-600 ${activeTab === "Blog" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singlepost"
                onClick={() => { handleTabClick("Single Post"); toggleMenu(); }}
                className={`font-sans hover:text-blue-600 ${activeTab === "Single Post" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => { handleTabClick("About"); toggleMenu(); }}
                className={`font-sans hover:text-blue-600 ${activeTab === "About" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => { handleTabClick("Contact"); toggleMenu(); }}
                className={`font-sans hover:text-blue-600 ${activeTab === "Contact" ? 'text-blue-600' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/signup" className={`font-sans hover:text-blue-600 ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
            </li>
            <li>
              <Link to="/login" className="font-sans bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 border border-transparent hover:border-blue-600 transition duration-220 ease">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
