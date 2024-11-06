'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-technology-design-pack-business-illustrations-4496032.png?f.png',
      title: 'Web Development',
      description: 'Building responsive, high-performance websites tailored to your business needs.',
    },
    {
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/app-development-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--application-programming-coding-computer-pack-design-illustrations-4315311.png',
      title: 'App Development',
      description: 'Custom mobile applications that enhance user experience and engagement.',
    },
    {
      icon: 'https://png.pngtree.com/png-clipart/20211024/original/pngtree-gradient-ui-ux-user-interface-icon-mobile-for-social-media-png-image_6866328.png',
      title: 'UI/UX Design',
      description: 'Crafting user-friendly and visually appealing designs for maximum impact.',
    },
    {
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/graphic-design-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--tool-designing-development-illustrations-4138040.png',
      title: 'Graphic Design',
      description: 'Creative graphic solutions to visually represent your brand’s unique identity.',
    },
    {
      icon: 'https://static.vecteezy.com/system/resources/thumbnails/048/027/289/small_2x/nfc-card-3d-illustration-a-hand-hold-nfc-card-png.png',
      title: 'NFC Solutions',
      description: 'Innovative NFC technology integration for seamless, modern solutions.',
    },
    {
      icon: 'https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-social-media-pack-business-illustrations-5789449.png',
      title: 'Digital Marketing',
      description: 'Strategies to boost your brand visibility, engagement, and customer loyalty.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-[-70px] md:mt-0">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
      <p className="text-gray-600 mb-12">
        Explore a range of solutions tailored to meet your business needs.
      </p>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-2xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:translate-y-2"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4 transform transition-transform hover:scale-110">
              <img src={service.icon} alt={`${service.title} Icon`} width={130} height={130} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Services;
