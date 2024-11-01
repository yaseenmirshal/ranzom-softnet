// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Social Connect Bar */}
  

      <div className="container mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {/* Logo and Description */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">Ranzom Softnet</h1>
          <p className="text-gray-400 text-sm">
            Were passionate about delivering the most effective marketing and technology solutions. We take the time
            to understand your unique needs and goals, then leverage our expertise to craft a customized plan that drives
            results.
          </p>
        </div>
        {/* Products Section */}
        <div className='ml-14'>
          <h2 className="text-base font-semibold">PRODUCTS</h2>
          <ul className="mt-3 space-y-1 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Designing</li>
            <li>Content Creation</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-base font-semibold">USEFUL LINKS</h2>
          <ul className="mt-3 space-y-1 text-gray-400 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-base font-semibold">SUBSCRIBE</h2>
          <p className="mt-3 text-gray-400 text-sm">Subscribe to our channel</p>
          <button className="mt-3 px-3 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-blue-600 text-sm">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-3">
        <div className="container mx-auto flex flex-col items-center md:flex-row justify-between text-center text-gray-400 text-xs">
          <p>&copy; 2023 yminnovation. All rights reserved.</p>
          {/* Social Icons */}
          <div className="flex text-xl space-x-6 mt-3 md:mt-0">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
