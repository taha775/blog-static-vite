import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-white mt-32">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-black">Category</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">News</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">World</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Games</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">References</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">Apples</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Web</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">eCommerce</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Business</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Entertainment</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Media</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Brochure</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Nonprofit</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Education</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Projects</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-black">Business</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Infopreneur</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Personal</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Webkit</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Forum</a></li>
                <li><a href="/" className="text-gray-700 transition-colors duration-300 hover:text-blue-600">Projects</a></li>
              </ul>
            </div>
          </div>
          {/* Subscriptions */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-black">Subscribe for updates</p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-black transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, excepturi eveniet. Quidem eaque, eligendi, sequi temporibus quisquam a provident id repellendus itaque voluptate ipsam perspiciatis adipisci explicabo consectetur, harum omnis.</p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-300 sm:flex-row">
          <p className="text-lg text-gray-700">© Copyright 2024 | All rights reserved.</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-black transition-all duration-300 hover:text-blue-600"><FaTwitter className="h-6 w-6" /></a>
            <a href="/" className="text-black transition-all duration-300 hover:text-blue-600"><FaFacebook className="h-6 w-6" /></a>
            <a href="/" className="text-black transition-all duration-300 hover:text-blue-600"><FaInstagram className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
