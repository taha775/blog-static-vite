// Banner.jsx

import React from 'react';
import banner from "../../assets/banner.png";
// import { useTheme } from '../../../ThemeContext.jsx';

import {  useSelector } from 'react-redux';
const Banner = () => {
  const { theme } = useSelector(state => state.theme); // Accessing theme state from Redux  state jo ha store sa get hogi 
  // const themeData = useSelector(state => state.theme); // Accessing theme state from Redux



  return (
    <div className={`flex justify-center items-center flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition duration-500`}>
      <img className='w-auto h-auto items-center mt-10' src={banner} alt="Banner" />
      <div className="title flex items-center text-center">
        <h1 className={`text-4xl sm:text-3xl lg:text-5xl xl:text-6xl leading-snug font-sans font-bold mt-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          A <span className='text-blue-600'>Journey</span> Through the
          <span className='text-blue-600'> Unseen:</span> Exploring the
          <span className='text-blue-600'> Wonders</span> of the
          <span className='text-blue-600'> World</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
