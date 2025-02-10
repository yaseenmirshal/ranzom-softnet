'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stacks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-7xl text-center text-white border border-gray-700">
        <h2 className="text-3xl font-bold text-blue-400 mb-2" data-aos="fade-up">Our Stacks</h2>
        <p className="text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
          We put your ideas and thus your wishes in the form of a unique project that inspires our customers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            { src: 'https://vectorcrop.com/assets/images/flutter.svg', name: 'Flutter' },
            { src: 'https://vectorcrop.com/assets/images/react.png', name: 'React' },
            { src: 'https://vectorcrop.com/assets/images/js.png', name: 'JavaScript' },
            { src: 'https://vectorcrop.com/assets/images/node.png', name: 'NodeJs' },
            { src: 'https://vectorcrop.com/assets/images/python.png', name: 'Python' },
            { src: 'https://vectorcrop.com/assets/images/html.png', name: 'HTML' },
            { src: 'https://vectorcrop.com/assets/images/mongo.png', name: 'MongoDB' },
            { src: 'https://vectorcrop.com/assets/images/mysql.png', name: 'MySQL' },
            { src: 'https://karmanivero.us/assets/images/logo-nextjs.png', name: 'Next.js' },
            { src: 'https://vectorcrop.com/assets/images/figma.png', name: 'Figma' },
          ].map((stack, index) => (
            <div
              key={stack.name}
              className="bg-[#222222] p-4 rounded-xl flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e2e2e] hover:shadow-md hover:border hover:border-blue-400 hover:text-blue-400"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={stack.src} alt={stack.name} width={50} height={50} />
              <p className="mt-2">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
