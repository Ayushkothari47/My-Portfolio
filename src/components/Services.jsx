import React from "react";
import { 
  FaPaintBrush, 
  FaMobileAlt, 
  FaBullhorn, 
  FaLock, 
  FaChartLine, 
  FaSearch, 
  FaHandshake, 
  FaCode 
} from "react-icons/fa";
import { RiBrushFill } from "react-icons/ri";

const servicesData = [
  {
    id: 1,
    icon: <RiBrushFill />,
    title: "Brand Identity",
    desc: "Innovative ideas to take your brand to the next level."
  },
  {
    id: 2,
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "High-quality development services for web and mobile."
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Development",
    desc: "Beautiful and functional designs that users love."
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Grow your audience with data-driven strategies."
  },
  {
    id: 5,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Protect your digital assets with reliable tools."
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: "SEO Services",
    desc: "Scalable cloud systems for modern businesses."
  },
  {
    id: 7,
    icon: <FaHandshake />,
    title: "Analytics",
    desc: "Expert guidance tailored to your needs."
  },
  {
    id: 8,
    icon: <FaLock />,
    title: "Security",
    desc: "Boost performance through tested improvements."
  }
];

function Services() {
  return (
    <section className="py-20 bg-[#141414] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Heading */}
        <h2 className="text-4xl text-center mb-4">Services</h2>

        {/* Sub Heading */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We offer a wide range of services designed to help you grow, 
          innovate, and transform your brand in the digital world.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map(service => (
            <div
              key={service.id}
              className="bg-[#1c1c1c] border border-gray-700 p-6 rounded-xl hover:border-gray-500 transition group"
            >
              
              {/* Icon Box */}
              <div className="
                w-14 h-14 mx-auto mb-4 flex items-center justify-center 
                rounded-xl
                bg-red-500/20 
                text-red-500 text-3xl
                transition-all duration-300
                group-hover:bg-[#ed4d65]
                group-hover:text-white
              ">
                {service.icon}
              </div>

              <h3 className="text-md text-center mb-2">
                {service.title}
              </h3>

              <p className="text-gray-400 text-xs text-center mb-4">
                {service.desc}
              </p>

              <div className="text-center">
                <button className="text-white hover:text-red-400 font-medium transition">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
