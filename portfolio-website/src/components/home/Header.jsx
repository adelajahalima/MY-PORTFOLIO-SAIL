import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Halima.png';
import moonIcon from '../../assets/images/moon_icon.png';
import sunIcon from '../../assets/images/sun_icon.png';
import hamburger from "../../assets/images/menu-black.png";
import menuClose from '../../assets/images/close-black.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent body scroll when menu is open
  };

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //     document.body.style.overflow = 'auto'; // Restore body scroll
  //   }
  // };

  // Apply theme to the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <img src={logo} alt='logo' className='w-24 cursor-pointer ml-4' />
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50
          dark:bg-gray-800 dark:bg-opacity-70 dark:shadow-lg'>
          <li><Link to="/" className="text-gray-700 dark:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 dark:text-gray-300">About Me</Link></li>
          <li><Link to="/#techstack" className="text-gray-700 dark:text-gray-300">Tech Stack</Link></li>
          <li><Link to="/#projects" className="text-gray-700 dark:text-gray-300">Projects</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-300">Contact</Link></li>
        </ul>
        <div className='flex items-center gap-14'>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <img src={isDarkMode ? sunIcon : moonIcon} className='w-6' alt='' />
          </button>
          <div className="hidden lg:flex space-x-4 ">
            <a href="https://github.com/adelajahalima" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="gradient_hover w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.267 1.98-.399 3-.404 1.02.005 2.043.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.624-5.478 5.921.43.37.815 1.102.815 2.222 0 1.604-.014 2.897-.014 3.293 0 .322.217.694.824.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a href="https://x.com/herlimz_?s=21&t=vv41yn6jFmvuKmK8uvAuIA" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="gradient_hover w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.885.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.92 0 .386.043.761.128 1.122-4.087-.205-7.715-2.164-10.14-5.144-.424.727-.666 1.57-.666 2.475 0 1.71.87 3.213 2.19 4.096-.808-.026-1.568-.248-2.232-.617v.062c0 2.386 1.698 4.374 3.953 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.445 3.377 4.6 3.416-1.685 1.321-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.396 4.767 2.209 7.548 2.209 9.056 0 14.008-7.504 14.008-14.008 0-.213-.004-.425-.014-.637.964-.695 1.797-1.56 2.457-2.548l-.047-.02z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/halima-adelaja-97139b153" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="gradient_hover w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-2v-9h2v9zm-1-10.341c-.622 0-1.126-.504-1.126-1.126s.504-1.125 1.126-1.125 1.125.503 1.125 1.125-.503 1.126-1.125 1.126zm12 10.341h-2v-4.978c0-1.188-.023-2.722-1.66-2.722-1.662 0-1.916 1.298-1.916 2.633v5.067h-2v-9h1.922v1.229h.027c.267-.506 1.051-1.039 2.164-1.039 2.314 0 2.741 1.524 2.741 3.505v5.305z" />
              </svg>
            </a>
          </div>

          <button onClick={toggleMenu} className='block md:hidden ml-3'>
            <img src={hamburger} alt='menu' className='w-6 filter dark:invert' />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black opacity-50"
              onClick={toggleMenu}
            ></div>

            {/* Side Menu */}
            <div
              ref={menuRef}
              id="sideMenu"
              className="fixed top-0 right-0 z-50 w-64 h-full bg-rose-50 shadow-lg p-10 transition-transform duration-500"
            >
              <div className='absolute right-6 top-6'>
                <img src={menuClose} alt='close' className='w-5' onClick={toggleMenu} />
              </div>
              <ul className='flex flex-col gap-4'>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
                <li><Link to="/#techstack" onClick={toggleMenu}>Tech Stack</Link></li>
                <li><Link to="/#projects" onClick={toggleMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
