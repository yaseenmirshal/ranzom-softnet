'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <nav className="bg-white backdrop-blur-lg fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./images/rtbgrm.png" className="h-14 mr-[-10px]" alt="Ranzom Tech Logo" />
            <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-gray-800">Ranzom Tech</span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="http://wa.me/9947234099" target='_blank'>
              <button
                type="button"
                className="hidden lg:block text-white bg-violet-700 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact Us
              </button>
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out"
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
            className={`items-center font-bold justify-between w-full md:flex md:w-auto md:order-1 ${isNavbarOpen ? 'block' : 'hidden'}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white md:bg-transparent">
              <li>
                <a href="#home" onClick={handleLinkClick} className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-violet-600 md:p-0 transition duration-300 ease-in-out">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" scroll="false" onClick={handleLinkClick} className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-violet-600 md:p-0 transition duration-300 ease-in-out">
                  About
                </a>
              </li>
              <li>
                <a href="#services" scroll="false" onClick={handleLinkClick} className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-violet-600 md:p-0 transition duration-300 ease-in-out">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" scroll="false" onClick={handleLinkClick} className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-violet-600 md:p-0 transition duration-300 ease-in-out">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;