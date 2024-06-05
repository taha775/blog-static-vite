import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center items-center mt-8 mb-4'>
      <Box className="max-w-lg w-full flex-col px-24 py-6 rounded-lg" style={{
        boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px'
      }}>
        <div className='text-center mb-4'>
          <Heading as='h2' className='text-4xl'>Log In</Heading>
        </div>

        <div className='text-center'>
          <Button className="flex border-blue-600 rounded items-center cursor-pointer px-12 py-5" variant="outline">
            <FaGoogle size={25} className="mr-3 cursor-pointer" />
            Continue with Google
          </Button>
        </div>

        <div className="flex items-center justify-center my-4 space-x-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-black">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <form>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <div className="mt-9">
            <Button color="indigo" variant="outline" className="w-full cursor-pointer p-3">
              Log In
            </Button>
          </div>
        </form>
        <p className="mt-4 text-sm font-serif font-bold text-center">
          Don't have an account? <Link to="/signup" className="font-medium text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </Box>
    </div>
  );
};

export default Login;
