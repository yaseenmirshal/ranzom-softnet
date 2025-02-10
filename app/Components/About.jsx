import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='about' className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        
        {/* Text Section */}
        <motion.div 
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
          data-aos="fade-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="uppercase text-sm tracking-widest text-blue-600 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Us
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Elevating Your Digital Future
          </motion.h2>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Ranzom Technologies is a forward-thinking software company dedicated to providing innovative solutions that drive digital transformation. 
            We specialize in AI, front-end development, and custom software tailored to your business needs. 
            Our mission is to empower businesses with technology that’s both robust and user-friendly.
          </motion.p>
         
          {/* Our Journey Section */}
          <motion.div 
            className="mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <motion.p 
              className="uppercase text-sm tracking-widest text-blue-600 mb-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Our Journey
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              From Vision to Reality
            </motion.h2>
            <motion.p 
              className="text-gray-700 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Founded with a vision to revolutionize the tech industry, Ranzom Technologies started as a small team with big ambitions. 
              Through dedication and innovation, we have grown into a trusted partner for businesses worldwide, 
              pushing the boundaries of what’s possible in the world of software.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Illustration Section */}
        <motion.div 
          className="lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="./images/illusabout.png"
            alt="About Ranzom Technologies"
            width={500}
            height={500}
            className="rounded-lg "
            data-aos="zoom-in"
            data-aos-delay="800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
