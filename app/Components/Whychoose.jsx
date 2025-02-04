import { FaBolt, FaRocket, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import AOS from "aos";
import { useEffect } from "react";

export default function WhyChooseRanzom() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400" data-aos="fade-up">
            Why Choose Us
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Why Choose <span className="text-blue-400">Ranzom Technologies</span>?
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            We combine cutting-edge technology, strategic thinking, and creative execution to 
            deliver powerful digital solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBolt size={40} />,
              title: "Innovative Solutions",
              description: "We push the boundaries of technology to create cutting-edge solutions that give your business a competitive edge.",
              delay: 200,
            },
            {
              icon: <FaRocket size={40} />,
              title: "Performance Driven",
              description: "Our websites and applications are optimized for speed, efficiency, and high engagement.",
              delay: 400,
            },
            {
              icon: <FaHandshake size={40} />,
              title: "Client-Centric Approach",
              description: "We work closely with you to ensure your vision is translated into a powerful digital experience.",
              delay: 600,
            },
            {
              icon: <FaShieldAlt size={40} />,
              title: "Security & Reliability",
              description: "We prioritize data security and reliability to provide seamless and safe digital experiences.",
              delay: 800,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
