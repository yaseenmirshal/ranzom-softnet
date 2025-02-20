import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Head>
        <title>RanzomTech - Innovate Your Future</title>
        <meta name="description" content="Welcome to RanzomTech, where innovation meets excellence." />
      </Head>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ranzomvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start text-left text-white px-6 md:px-20">
        <h1 className="text-4xl ml-0 md:ml-28 md:text-6xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-700">
          Innovative Solutions for Your Marketplace Business
        </h1>
        <p className="text-lg ml-0 md:ml-28 md:text-2xl max-w-2xl mb-6">
          Where Innovation Meets Excellence. Building the Future of Technology.
        </p>

        {/* Our Services Button */}
        <a href="/services" className="px-6 ml-0 md:ml-28 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-black text-lg font-semibold rounded-lg shadow-md hover:opacity-80 transition duration-300">
          Our Services
        </a>
      </div>
    </div>
  );
}
