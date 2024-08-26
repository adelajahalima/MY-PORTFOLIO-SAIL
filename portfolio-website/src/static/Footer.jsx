import React from 'react';
import logo from '../assets/images/Halima..png';


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 px-20 sm:px-24 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-24 cursor-pointer mr-14" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            
            <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Technologies</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
          </div>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© {year} Adelaja Halima. All rights reserved.</p>
          <p className="text-gray-600 dark:text-gray-400">Designed and built by Halima with ❤️ & ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;