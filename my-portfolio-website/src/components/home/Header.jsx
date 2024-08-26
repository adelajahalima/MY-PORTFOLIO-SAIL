import React from 'react';
import logo from '../../assets/images/Halima..png';
import arrowIcon from '../../assets/images/arrow-icon.png';
import moonIcon from '../../assets/images/moon_icon.png';

export default function Header() {
  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <img src={logo} alt='logo' className='w-28 cursor-pointer mr-14'/>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#stack'>Tech Stack</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button><img src={moonIcon}/></button>
            <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full m1-4'
            href='#contact'>Contact<img src={arrowIcon} alt='arrow icon' className='w-3'/></a>
        </div>
    </nav>
  )
}
