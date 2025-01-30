// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Social Connect Bar */}
  

      <div className="container mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {/* Logo and Description */}
        <div className="space-y-3">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">

      <img src="./images/rtblackk.png" className="h-10 mr-[-10px]" alt="Flowbite Logo"/>
      <span className="self-center text-2xl md:text-1xl  font-semibold whitespace-nowrap dark:text-white">Ranzom Technologies</span>

  </Link>
          <p className="text-gray-400 text-sm">
            Were passionate about delivering the most effective marketing and technology solutions. We take the time
            to understand your unique needs and goals, then leverage our expertise to craft a customized plan that drives
            results.
          </p>
        </div>
        {/* Products Section */}
        <div className='ml-0 md:ml-14'>
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

          <p>&copy; 2023 <a href='https://www.instagram.com/ranzomtech/'>ranzomtech</a>. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex text-xl space-x-6 mt-3 md:mt-0">
          <a href="http://wa.me/9947234099" target='_blank'> 
           <FaWhatsapp className="hover:text-white cursor-pointer" />
           </a>

           <a href="https://www.instagram.com/ranzomtech/" target='_blank'>

            <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/ranzom-softnet/" target='_blank'>
            <FaLinkedin className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
