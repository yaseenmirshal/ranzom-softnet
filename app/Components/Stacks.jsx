'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stacks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing style
      once: true, // Only animate once
    });
  }, []);

  return (
    <section className="bg-[#0d0d22] py-16 px-6 md:px-12 lg:px-24 text-center text-white">
      <h2 className="text-3xl font-bold text-purple-500 mb-2" data-aos="fade-up">Our Stacks</h2>
      <p className="text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="100">
        We put your ideas and thus your wishes in the form of a unique project that inspires our customers.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Technology Card */}
        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
        >
          <img src="https://vectorcrop.com/assets/images/flutter.svg" alt="Flutter" width={50} height={50} />
          <p className="mt-2">Flutter</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src="https://vectorcrop.com/assets/images/react.png" alt="React" width={50} height={50} />
          <p className="mt-2">React</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src="https://vectorcrop.com/assets/images/js.png" alt="JavaScript" width={50} height={50} />
          <p className="mt-2">JavaScript</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src="https://vectorcrop.com/assets/images/node.png" alt="NodeJs" width={50} height={50} />
          <p className="mt-2">NodeJs</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img src="https://vectorcrop.com/assets/images/python.png" alt="Python" width={50} height={50} />
          <p className="mt-2">Python</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img src="https://vectorcrop.com/assets/images/html.png" alt="HTML" width={50} height={50} />
          <p className="mt-2">HTML</p>
        </div>

        

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <img src="https://vectorcrop.com/assets/images/mongo.png" alt="MongoDB" width={50} height={50} />
          <p className="mt-2">MongoDB</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <img src="https://vectorcrop.com/assets/images/mysql.png" alt="MySQL" width={50} height={50} />
          <p className="mt-2">MySQL</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <img src="https://karmanivero.us/assets/images/logo-nextjs.png" alt="Android" width={50} height={50} />
          <p className="mt-2">Next js</p>
        </div>

        <div
          className="bg-[#19192f] p-4 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#292943] hover:shadow-lg hover:border hover:border-purple-500 hover:text-purple-500"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <img src="https://vectorcrop.com/assets/images/figma.png" alt="Figma" width={50} height={50} />
          <p className="mt-2">Figma</p>
        </div>

      
      </div>
    </section>
  );
};

export default Stacks;
