import React from 'react';
import halima from '../../assets/images/me.jpg'

const Hero = () => {
  return (
    <section className="section-hero bg-white dark:bg-gray-900 pt-44 pb-16 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:mr-8">
          <h1 className=" animation text-5xl md:text-7xl font-bold mb-2">
            <span className="text-gray-800 dark:text-white">Hi</span>
            <span className="dark:text-white ml-2">👋,</span>
          </h1>
          <h2 className=" h2_1 animation text-5xl md:text-6xl font-bold mb-2">
            <span className="text-gray-800 dark:text-white">My name is</span>
          </h2>
          <h2 className="h2_2 animation text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
            Halima<span className="text-gray-800 dark:text-white ml-2">,</span>
          </h2>
          <p className="animation text-3xl md:text-4xl text-gray-600 dark:text-gray-300">
            I build things for the web.
          </p>
        </div>
        <div className=" hero-img animation w-48 h-48 md:w-64 md:h-64 ">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full animate-spin-slow"></div> */}
          
            <img
              src={halima}
              alt="Me"
              className="gradient-border absolute -inset-y-10 object-cover mt-20 sm:mt-8 md:mt-0 lg:mt-0"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;