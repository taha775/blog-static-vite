import React from 'react';
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <img className=' w-auto h-auto items-center' src={banner} alt="Banner" />
      <div className="title flex items-center text-center">
        <h1 className='text-4xl sm:text-3xl lg:text-5xl xl:text-6 xl leading-snug font-bold mt-10'>
          A <span className='text-blue-600'>Journey</span>  Through the
          <span className='text-blue-600'> Unseen:</span> Exploring the 
          <span className='text-blue-600'> Wonders</span> of the 
          <span className='text-blue-600'> World</span>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
