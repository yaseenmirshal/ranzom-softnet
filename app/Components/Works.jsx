'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const works = [
    {
      image: 'https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?s=612x612&w=0&k=20&c=d0F_7Rs2bysfEL9zr9JVN1TLzVOlEycNkz-vd19OANA=',
      title: 'Web Development Project',
      description: 'A responsive, dynamic website built for a leading brand.',
    },
    {
      image: 'https://img.freepik.com/premium-photo/3d-minimal-mobile-app-development-mobile-web-design_887552-29668.jpg',
      title: 'App Development Project',
      description: 'A mobile app with seamless UI and high performance.',
    },
    {
      image: 'https://i.ytimg.com/vi/Otpf4K8-Me0/maxresdefault.jpg',
      title: 'UI/UX Design Project',
      description: 'Innovative and user-friendly designs for optimal engagement.',
    },
    {
      image: 'https://teamtweaks1-blog.s3.us-east-2.amazonaws.com/blog/wp-content/uploads/2023/09/05133724/Best-Digital-Marketing-Agencies-In-Mumbai.jpg',
      title: 'Digital Marketing Project',
      description: 'Boosted brand presence and customer reach through digital strategies.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/creative-workspace-with-desktop-computer-graphic-design-softwarexa_767466-23414.jpg',
        title: 'Graphic Design Project',
        description: 'Creative and visually striking designs that capture brand essence and engage audiences.',
      },
      {
        image: 'https://tapitag.co/cdn/shop/files/Corporate_Plan.jpg?v=1724856748&width=2400',
        title: 'NFC Card Projects',
        description: 'Seamlessly integrated NFC technology for enhanced convenience and connectivity.',
      },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-violet-500 mb-6">Our Works</h2>
        <p className="text-gray-600 mb-12">Showcasing some of our latest and most impactful projects.</p>

        {/* Work Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
