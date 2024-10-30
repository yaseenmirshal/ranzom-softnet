import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="bg-[#0a012a] min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center text-[200px] font-extrabold text-[#0a012a] opacity-10">
          RANZOM SOFTNET
        </div>

        {/* Main content container with flex row for side-by-side layout */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full px-8 md:px-16">
          {/* Text content aligned to the left */}
          <div className="text-left md:w-1/2 mt-14">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
              Inspire the next
            </p>

            <h1 style={{ lineHeight: '67px' }} className="text-4xl sm:text-6xl font-bold mb-4">
              Empower Your<br /> vision <span className="text-violet-500">goals</span> with{" "}
              <span className="text-[#ff4d67]">Ranzom Softnet</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8">
              We will deliver you marketing and technology <br/>solutions in the best way.
            </p>

            <div className="flex items-center space-x-5">
              <button className="bg-transparent border border-violet-500 text-white px-6 py-2 rounded-full mr-6 text-lg font-semibold hover:bg-violet-500 hover:text-white transition duration-200">
                Connect us now!
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-lg rounded-full border border-violet-500 transition duration-200"
              >
                <FaInstagram />
              </a>
              
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-lg rounded-full border border-violet-500 transition duration-200"
              >
                <FaWhatsapp />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-lg rounded-full border border-violet-500 transition duration-200"
              >
                <FaLinkedin />
              </a>
              
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:bg-violet-500 hover:text-white p-2 text-lg rounded-full border border-violet-500 transition duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Illustration on the right */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <img
              src="/images/workingman.png" // Updated src path
              alt="Illustration"
              className="w-[620px] h-[520px] mt-10 "
            />
          </div>
        </div>

        <div className="mt-16 flex justify-around w-full text-left">
          <div className="text-center order-2">
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="text-gray-400 text-lg">Projects Completed</p>
          </div>
          <div className="text-center order-1">
            <h2 className="text-5xl font-bold">4</h2>
            <p className="text-gray-400 text-lg">Years of Experience</p>
          </div>
          <div className="text-center order-3">
            <h2 className="text-5xl font-bold">1K+</h2>
            <p className="text-gray-400 text-lg">Happy Clients</p>
          </div>
          <div className="text-center order-4">
            <h2 className="text-5xl font-bold">3</h2>
            <p className="text-gray-400 text-lg">Open Source Projects</p>
          </div>
        </div>
      </div>
    </>
  );
}
