import React, { useState } from 'react';
import logo from '../../assets/images/Halima..png';
import arrowIcon from '../../assets/images/arrow-icon.png';
import moonIcon from '../../assets/images/moon_icon.png';
import headerBG from  '../../assets/images/header-bg-color.png';
import hamburger from "../../assets/images/menu-black.png";
import menuClose from '../../assets/images/close-black.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent body scroll when menu is open
  };

  return (
    <>
      <div className='fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]'>
        <img src={headerBG} alt='' className='w-full'/>
      </div> 
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <img src={logo} alt='logo' className='w-24 cursor-pointer ml-4'/>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About Me</a></li>
          <li><a href='#stack'>Tech Stack</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button><img src={moonIcon} className='w-6' alt=''/></button>
          <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full m1-4'
            href='#contact'>Contact<img src={arrowIcon} alt='arrow icon' className='w-3'/></a>

          <button onClick={toggleMenu} className='block md:hidden ml-3'>
            <img src={hamburger} alt='menu' className='w-6'/>
          </button>
        </div>

        {/* Mobile menu */}
        <ul id="sideMenu" className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 
            bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${isMenuOpen ? 'right-0' : '-right-64'}`}>
          <div className='absolute right-6 top-6'> 
            <img src={menuClose} alt='close' className='w-5' onClick={toggleMenu}/>
          </div>
          <li><a href='#home' onClick={toggleMenu}>Home</a></li>
          <li><a href='#about' onClick={toggleMenu}>About Me</a></li>
          <li><a href='#stack' onClick={toggleMenu}>Tech Stack</a></li>
          <li><a href='#projects' onClick={toggleMenu}>Projects</a></li>
          <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
