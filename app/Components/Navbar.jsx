'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav
  className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
  }`}
>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./images/rannav.png" className="h-10 p-1" alt="Ranzom Tech Logo" />
         
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="http://wa.me/9947234099" target="_blank">
            <button
              type="button"
              className="hidden lg:block text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </button>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-300 ease-in-out"
            onClick={handleNavbarToggle}
            aria-controls="navbar-sticky"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Mobile menu (toggle visibility) */}
        <div
          className={`items-center font-bold justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${isNavbarOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-900 md:bg-transparent">
            <li>
              <a
                href="#home"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 transition duration-300 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
