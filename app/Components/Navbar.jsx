'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  // State to toggle the mobile navbar visibility
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle the navbar open/close
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className="bg-white bg-opacity-30 backdrop-blur-lg fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:bg-gray-900 dark:bg-opacity-30 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./images/rslogo.png" className="h-12 mr-[-10px]" alt="Flowbite Logo" />
            <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap dark:text-white">Ranzom Softnet</span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="hidden lg:block text-white bg-violet-700 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-500 dark:focus:ring-violet-800"
            >
              Contact Us
            </button>

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleNavbarToggle} // Add toggle functionality here
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
            className={`items-center ml-96 font-bold justify-between w-full md:flex md:w-auto md:order-1 ${isNavbarOpen ? 'block' : 'hidden'}`} // Conditionally render the menu
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {/* Home Link */}
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-violet-500 rounded md:bg-transparent md:text-violet-500 md:p-0 md:dark:text-blue-500" aria-current="page">
                  HomeAlone
                </a>
              </li>

              {/* About Link */}
              <li>
                <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </a>
              </li>

              {/* Services Link */}
              <li>
                <a href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </a>
              </li>

              {/* Contact Linkaa */}
              <li>
                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
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
