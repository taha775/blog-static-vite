import React, { useState } from 'react';
import logoLight from "../assets/logo.png"; // Light mode logo
import logoDark from "../assets/light.png"; // Dark mode logo
import { SiDarkreader  } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaPersonBooth, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'; // Importing Redux hooks
import { toggleTheme } from '../store/slices/themeslice';
import { IoIosSearch } from "react-icons/io";
import { Input, InputAdornment } from '@mui/material';
import { MdAccountCircle } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import "../App.css"




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
     
      <div className={`navbar-main pt-0 flex   mx-auto space-x-4 ${theme === 'dark' ? 'dark:bg-black text-myorange'  : ''} justify-between items-center p-6`}>
        <img style={{}} className=' w-48 h-20 logo'  src={theme === 'dark' ? logoLight : logoLight} alt="Logo" />
        <div style={{height:"120px"}} className="nav-div  hidden md:flex   ">
          <ul className='nav-items flex justify-evenly  text-1xl gap-3 items-center  text-center '>
            <li >
            <NavLink
  to="/"
  onClick={() => handleTabClick("Home")}
  className={`font-myfont py-4 px-2 hover:border-myorange hover:border-t-2 hover:border-b-2 transition-all duration-500 ease-in-out ${
    activeTab === "Home" ? 'bg-myorange text-black border-t-2 border-b-2  border-myorange' : theme === "dark" ? 'text-orange' : 'text-black'
  }`}
>
  HOME
</NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                onClick={() => handleTabClick("ABOUT US")}
                className={`font-myfont py-4 px-2 hover:border-myorange hover:border-t-2 hover:border-b-2 transition-all duration-500 ease-in-out ${
                  activeTab === "ABOUT US" ? 'bg-myorange text-black border-t-2 border-b-2  border-myorange' : theme === "dark" ? 'text-orange' : 'text-black'
                }`}
              >
                ABOUT US 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/disclaimer"
                onClick={() => handleTabClick("disclaimer")}
                className={`font-myfont py-4 px-2 hover:border-myorange hover:border-t-2 hover:border-b-2 transition-transform duration-1000 ease-in-out ${
                  activeTab === "disclaimer" ? 'bg-myorange text-black border-t-2 border-b-2  border-myorange' : theme === "dark" ? 'text-orange' : 'text-black'
                }`}
              >
                DISCLAIMER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacypolicy"
                onClick={() => handleTabClick("Privacy Policy")}
                className={`font-myfont py-4 px-2 hover:border-myorange hover:border-t-2 hover:border-b-2 transition-all duration-500 ease-in-out ${
                  activeTab === "Privacy Policy" ? 'bg-myorange text-black border-t-2 border-b-2  border-myorange' : theme === "dark" ? 'text-orange' : 'text-black'
                }`} >
                PRIVACY POLICY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleTabClick("Contact")}
                className={`font-myfont py-4 px-2 hover:border-myorange hover:border-t-2 hover:border-b-2 transition-all duration-500 ease-in-out ${
                  activeTab === "Contact" ? 'bg-myorange text-black border-t-2 border-b-2  border-myorange' : theme === "dark" ? 'text-orange' : 'text-black'
                }`} >
                CONTACT US 
              </NavLink>

            </li>
            <li className='ml-20    font-myfont'>
              <NavLink
                to="/login"
            
                  
                >
                   <Button variant="outline-warning" className='text-black text-1xl hover:bg-myorange '>LOGIN</Button>{' '}
                  


                
              </NavLink>

            </li>



            

            {/* <Input className='left-16'
      startAdornment={
        <InputAdornment position="start">
          <IoIosSearch size={25} />
        </InputAdornment>
      }
      placeholder="Search..."
      style={{ padding: '5px', borderRadius: '4px' }}
    /> */}
          
          </ul>
         
   

    <button onClick={handleToggleTheme} className="ml-8  ">
        <SiDarkreader  size={25} color={theme === "dark" ? "white" : "black"} />
        
      </button>
    
  
      
    
        </div>
        
        

{/*       
        <div className='flex items-center justify-center'> */}
        {/* <div className="hidden lg:flex items-center space-x-6  ">
          <Link to="/signup" className={`font-sans text-2xl hover:bg-myorange ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
          <Link to="/login" className="font-sans text-2xl bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:bg-myorange border border-transparent hover:border-myorange transition duration-220 ease">Login</Link>
        </div> */}
        {/*
        </div> */}

        <div className={`md:hidden items-center flex cursor-pointer  ${theme ==="dark"? 'text-whte' : 'text-black'}`}>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="w-10 h-10"  color={theme === "dark" ? "white" : "black"} /> : <FaBars   color={theme === "dark" ? "white" : "black"} className="w-10 h-10" />}
          </button>
        </div>
        
      </div>


      <div className="categories flex justify-center list-none items-center gap-x-10 font-myfont ">

            
<li>
  <NavLink
    to="/buisness"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    BUISNESS
  </NavLink>
</li>
<li>
  <NavLink
    to="/entertainment"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    ENTERTAINMENT
  </NavLink>
</li>
<li>
  <NavLink
    to="/health"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    Health
  </NavLink>
</li>
<li>
  <NavLink
    to="/news"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    NEWS
  </NavLink>
</li>
<li>
  <NavLink
    to="/sports"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    SPORTS
  </NavLink>
</li>
<li>
  <NavLink
    to="/technology"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    TECHNOLOGY
  </NavLink>
</li>
<li>
  <NavLink
    to="/travel"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    TRAVEL
  </NavLink>
</li>
<li>
  <NavLink
    to="/lifestyle"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    LIFESTYLE
  </NavLink>
</li>
<li>
  <NavLink
    to="/education"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    EDUCATION
  </NavLink>
</li>
<li>
  <NavLink
    to="/history"
    onClick={() => handleTabClick("Contact")}
    className={` hover:bg-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    HISTORY
  </NavLink>
</li>
<li>
  <NavLink
    to="/other"
    onClick={() => handleTabClick("Contact")}
    className={` hover:text-myorange hover:border-b-2 hover:border-myorange ${activeTab === "Contact" ? 'text-myorange border-b-2 border-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
  >
    OTHER
  </NavLink>
</li>

</div>
      {/* Menu items only for mobiles */}
      {isMenuOpen && (
        <div className='flex items-end'>
          <ul className='md:hidden flex-col items-center space-y-6 py-6 text-2xl'>
            <li>
              <NavLink
                to="/"
                onClick={() => { handleTabClick("Home"); toggleMenu(); }}
                className={`font-sans hover:text-myorange ${activeTab === "Home" ? 'text-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => { handleTabClick("Blog"); toggleMenu(); }}
                className={`font-sans hover:text-myorange ${activeTab === "Blog" ? 'text-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/singlepost"
                onClick={() => { handleTabClick("Single Post"); toggleMenu(); }}
                className={`font-sans hover:text-myorange ${activeTab === "Single Post" ? 'text-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Single Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => { handleTabClick("About"); toggleMenu(); }}
                className={`font-sans hover:text-myorange ${activeTab === "About" ? 'text-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => { handleTabClick("Contact"); toggleMenu(); }}
                className={`font-sans hover:text-myorange ${activeTab === "Contact" ? 'text-myorange' : theme === "dark" ? 'text-white' : 'text-black'}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to="/signup" className={`font-sans hover:text-myorange ${theme === "dark" ? 'text-white' : 'text-black'}`}>Signup</Link>
            </li>
            <li>
              <Link to="/login" className="font-sans bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-myorange border border-transparent hover:border-myorange transition duration-220 ease">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
