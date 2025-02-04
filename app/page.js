'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import CountUp from "react-countup"; // For animated numbers
import { motion } from "framer-motion"; // For smooth animations
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Stacks from "./Components/Stacks";
import Whychoose from "./Components/Whychoose";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div
        id="home"
        className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen mt-14 md:mt-10 flex flex-col justify-center items-center text-white overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        {/* Main content container */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full space-y-10 md:space-y-0 px-4 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side: Text Content */}
          <motion.div className="md:text-left md:w-1/2 mt-14" data-aos="fade-right">
            <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-400 mb-2">
              Inspire the next
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Empower Your <br /> Vision{" "}
              <span className="text-blue-400">Goals</span> with{" "}
              <span className="text-[#ff4d67]">Ranzom Technologies</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8">
              We provide cutting-edge marketing & technology solutions tailored for your success.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
              <motion.a
                href="http://wa.me/9947234099"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <button className="w-52 md:w-auto border border-blue-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-500 transition duration-300">
                  Connect Now
                </button>
              </motion.a>

              <div className="flex space-x-3">
                {[
                  { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/ranzomsoftnet/" },
                  { icon: <FaWhatsapp size={20} />, link: "http://wa.me/9947234099" },
                  { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/company/ranzom-softnet/" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-blue-400 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Illustration */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/roboimg.png"
              alt="Illustration"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Stats Section with Animated CountUp */}
       {/* Stats Section with Animated CountUp */}
<motion.div
  className="mt-10 md:mt-20 mb-16 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
  data-aos="fade-up"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  {[
    { label: "Projects Completed", value: 30 },
    { label: "Years of Experience", value: 2 },
    { label: "Happy Clients", value: 200 },
    { label: "Open Source Projects", value: 3 },
  ].map((stat, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
        <CountUp end={stat.value} duration={3} />+
      </h2>
      <p className="text-gray-400 text-sm sm:text-lg">{stat.label}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
      <Whychoose/>
      <About />
      <Service />
      <Stacks />
      {/* <Works/> */}
      <Contact />
    </>
  );
}
