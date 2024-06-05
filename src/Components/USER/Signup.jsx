import React, { useState } from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='flex  justify-center items-center  mt-8 mb-4 '>
       <Box className="max-w-lg w-full flex-col  px-24 py-6 rounded-lg" style={{ 
    boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.4)', // Example box shadow
    borderRadius: '8px' // Example border radius
  }}>
            <div className='text-center mb-4'>
                <Heading  as ='h2' className='text-4xl ' >Create an Account </Heading>
                <p className='mt-2 text-1xl text-black'>Signup to get Started</p>
            </div>

        <div className='text-center'>
            <Button color="black" className="flex hover:border-solid rounded items-center cursor-pointer  px-12 py-5" variant="outline" >
                <FaGithub size={25} className='mr-3 cursor-pointer'/>
                Continue With Github
            </Button>
            <Button  className="flex hover:border-solid border-blue-600 rounded items-center cursor-pointer px-12 py-5" variant="outline">
            <FaGoogle  size={25}className="mr-3 cursor-pointer" />
            <span className='text-red-500' >Continue</span>  <span className='text-green-500'>with</span>  <span className='text-yellow-500'>Gooo</span> <span className='text-blue-500'>gle</span> 
             </Button>
        </div>


        <div className="flex items-center justify-center mb-4 space-x-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-black">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <form className='text-1xl font-serif font-bol'>
          <div className=''>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="name"
              placeholder="Enter your name"
              autoComplete="name"
        
             
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
              
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
             
            />
          </div>
          <div className="mt-9">
            <Button  color="indigo"  variant="outline" className="w-full cursor-pointer p-3" >
               Create Account 
            </Button>
          </div>
          <p className="mt-4 text-sm font-serif font-bold' text-center">
            By signing up, you agree to our <a href="#" className="font-medium text-blue-500 hover:underline">terms of service</a> and <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>.
          </p>
          <p>Already have an account ? </p>
          <button className='text-blue-500 font-serif font-bold'><Link to="/login">Login</Link></button>
          
          
        </form>
        </Box>
    </div>
  )
}

export default Signup