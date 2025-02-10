'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaTshirt, FaBullhorn, FaRobot } from 'react-icons/fa';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Web Development',
      description: 'Building responsive, high-performance websites tailored to your business needs.',
      delay: 200,
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: 'App Development',
      description: 'Custom mobile applications that enhance user experience and engagement.',
      delay: 400,
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'UI/UX Design',
      description: 'Crafting user-friendly and visually appealing designs for maximum impact.',
      delay: 600,
    },
    {
      icon: <FaTshirt size={40} />,
      title: 'Graphic Design',
      description: 'Creative graphic solutions to visually represent your brand’s unique identity.',
      delay: 800,
    },
    {
      icon: <FaBullhorn size={40} />,
      title: 'Digital Marketing',
      description: 'Strategies to boost your brand visibility, engagement, and customer loyalty.',
      delay: 1000,
    },
    {
      icon: <FaRobot size={40} />,
      title: 'AI Automation (Coming Soon)',
      description: 'Next-generation AI solutions to automate and optimize your business workflows.',
      delay: 1200,
    },
  ];

  return (
    <section id="services" className="bg-white py-20 text-gray-900">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500" data-aos="fade-up">
            Our Services
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Expertise at <span className="text-blue-500">Ranzom Technologies</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Explore a range of solutions tailored to meet your business needs with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300 border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
