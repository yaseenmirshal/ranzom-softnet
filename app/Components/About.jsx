'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        
        {/* Text Section */}
        <div 
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
          data-aos="fade-right" // Text section will slide in from the right
        >
          <h2 className="text-3xl font-bold text-violet-500 mb-2">
            About Us
          </h2>
          <h3 className="text-xl font-semibold text-[#3E2723] mb-4">Elevating Your Digital Future</h3>
          <p className="text-gray-600 leading-relaxed">
            Ranzom Softnet is a forward-thinking software company dedicated to providing innovative solutions that drive digital transformation. We specialize in AI, front-end development, and custom software that cater to your business needs. Our mission is to empower businesses with technology that’s both robust and user-friendly.
          </p>
         
          {/* Our Journey Section */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-violet-500 mb-2">
              Our Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize the tech industry, Ranzom Softnet began as a small team with big ambitions. Through dedication and a commitment to innovation, we have grown into a trusted partner for businesses worldwide, continuously pushing the boundaries of what’s possible in the world of software.
            </p>
          </div>
        </div>

        {/* Illustration Section */}
        <div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-right" // Illustration will slide in from the left
        >
          <img
            src="./images/illusabout.png"
            alt="About Ranzom Softnet Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
