import { FaLaptopCode, FaPalette, FaMobileAlt, FaPaintBrush, FaRobot, FaMobile } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "We build fast, scalable, and secure web applications tailored to your business needs. Our solutions ensure high performance, seamless user experience, and future-ready architectures.",
    icon: <FaLaptopCode className="text-orange-400 text-4xl" />,
    linkText: "Explore Web Development",
  },
  {
    title: "App Development",
    description: "From concept to deployment, we develop feature-rich, high-performance mobile applications for Android and iOS. Our apps are user-friendly, scalable, and designed to enhance customer engagement.",
    icon: <FaMobile className="text-orange-400 text-4xl" />,
    linkText: "Explore App Development",
  },
  {
    title: "UI/UX Development",
    description: "We craft visually stunning and intuitive interfaces that elevate user experience. Our designs are research-driven, ensuring smooth navigation and enhanced customer satisfaction.",
    icon: <FaPalette className="text-orange-400 text-4xl" />,
    linkText: "Explore UI/UX Design",
  },
  {
    title: "NFC Solutions",
    description: "Leverage NFC technology for smart, contactless solutions. From digital business cards to secure payment systems, we integrate NFC into your business seamlessly.",
    icon: <FaMobileAlt className="text-orange-400 text-4xl" />,
    linkText: "Explore NFC Solutions",
  },
  {
    title: "Graphic Design",
    description: "Stand out with captivating visuals! We create stunning logos, branding materials, and marketing assets that leave a lasting impression and elevate your brand identity.",
    icon: <FaPaintBrush className="text-orange-400 text-4xl" />,
    linkText: "Explore Graphic Design",
  },
  {
    title: "AI Automation (Coming Soon)",
    description: "Transform your business with AI-powered automation! Reduce manual tasks, improve efficiency, and unlock the potential of artificial intelligence.",
    icon: <FaRobot className="text-gray-500 text-4xl" />,
    linkText: "Launching Soon",
    disabled: true,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-zinc-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ title, description, icon, linkText, disabled }, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-gray-800 p-4 rounded-md mb-4">{icon}</div>
              <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-gray-400 mt-3">{description}</p>
                <a
                  className={`mt-4 inline-block text-orange-400 font-semibold ${
                    disabled ? "opacity-50 cursor-not-allowed" : "hover:underline"
                  }`}
                  href="#"
                >
                  {linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
