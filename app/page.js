import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Works from './Components/Works';
import Stacks from './Components/Stacks';

export default function Home() {
  return (
    <>
      <div className="bg-[#0a012a] min-h-screen mt-14 md:mt-0 flex flex-col justify-center items-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 flex justify-center items-center text-[80px] sm:text-[150px] lg:text-[200px] font-extrabold text-[#0a012a] opacity-10">
          RANZOM SOFTNET
        </div>

        {/* Main content container with flex row for side-by-side layout */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full space-y-10 md:space-y-0 px-4 sm:px-8 md:px-16">
          {/* Text content aligned to the left */}
          <div className=" md:text-left md:w-1/2 mt-14">
            <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
              Inspire the next
            </p>

            <h1 className="text-4xl text-start sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Empower Your<br /> vision <span className="text-violet-500">goals</span> with{" "}
              <span className="text-[#ff4d67]">Ranzom Softnet</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
              We will deliver you marketing and technology <br className="hidden md:block" />solutions in the best way.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-4 md:space-x-5">
              <button className="bg-transparent w-44 md:w-auto border border-violet-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm md:text-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-200">
                Connect us now!
              </button>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 text-base hover:bg-violet-500 hover:text-white p-2  rounded-full border border-violet-500 transition duration-200"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-base rounded-full border border-violet-500 transition duration-200"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-base rounded-full border border-violet-500 transition duration-200"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-base rounded-full border border-violet-500 transition duration-200"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Illustration on the right */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="/images/roboimg.png" // Updated src path
              alt="Illustration"
              className="w-[250px] sm:w-[350px] md:w-[500px] h-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex flex-wrap justify-around w-full text-center space-y-8 sm:space-y-0">
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">50+</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Projects Completed</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">4</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Years of Experience</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">1K+</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Happy Clients</p>
          </div>
          <div className="w-1/2 sm:w-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">3</h2>
            <p className="text-gray-400 text-sm sm:text-lg">Open Source Projects</p>
          </div>
        </div>
      </div>
      <About/>
      <Service/>
      {/* <Works/> */}
      <Stacks/>
      <Contact/>
     
    </>
  );
}
