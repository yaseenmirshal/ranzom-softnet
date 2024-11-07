'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section id='contact' className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Social Section */}
        <div data-aos="fade-right" className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-3xl font-bold text-violet-500 mb-4">Let’s Connect</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Reach out through our social channels or leave us a message to start your journey with us.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-violet-500 hover:text-violet-700 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-violet-500 hover:text-violet-700 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-violet-500 hover:text-violet-700 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-violet-500 hover:text-violet-700 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div data-aos="fade-up">
          <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="grid gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-violet-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-violet-500" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 font-semibold mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-violet-500"></textarea>
              </div>
              <button className="w-full bg-violet-500 text-white py-2 rounded hover:bg-violet-600 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
