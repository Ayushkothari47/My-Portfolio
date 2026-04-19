import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { SiLeetcode } from "react-icons/si";

import leetcodeIcon from "../assets/leetCodeIcon.png";

import profilePic from '../assets/ai_gen.png';
import { Typewriter } from 'react-simple-typewriter';

import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/js.png";
import nodeJs from "../assets/nodeJs.png";
import mongoIcon from "../assets/mongo.png";
import sqlIcon from "../assets/sql.png";

const words = ['Design', 'Develop', 'Test'];

function HeroSection() {
  // Changed state to check for 'Desktop' (>= 1024px) instead of Mobile
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // 1024px is the standard breakpoint for Landscape Tablets / Desktops
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Balanced arc positions (Desktop only)
  const circlePositions = [
    { top: '0%', left: '-40px' },
    { top: '23%', left: '-100px' },
    { top: '45%', left: '-130px' },
    { top: '70%', left: '-100px' },
    { top: '89%', left: '-40px' },
  ];

  const icons = [pythonIcon, jsIcon, nodeJs, mongoIcon, sqlIcon];

  return (
    // Changed structural breakpoints from 'md:' to 'lg:'
    <div className="w-full min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden bg-transparent pt-24 lg:pt-0">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">

        {/* LEFT CONTENT */}
       <div className="text-white w-full lg:max-w-2xl xl:max-w-3xl text-center lg:text-left relative z-20 pb-10 lg:pb-0 shrink-0">
          
          {/* Added lg:whitespace-nowrap to force a single line, adjusted lg/xl scaling */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold mb-4 lg:whitespace-nowrap">
            Hi, I'm <span className="text-[#9933ff]">Ayush Kothari</span>
          </h1>

          {/* Added lg:whitespace-nowrap and fine-tuned text scaling */}
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 leading-relaxed flex flex-col lg:flex-row items-center lg:items-baseline justify-center lg:justify-start lg:whitespace-nowrap">
            <span className="flex items-baseline">
              I can &nbsp;
              {/* Removed the inline-block and min-w classes so it hugs the text tightly */}
              <span className="text-[#9933ff] font-bold">
                <Typewriter
                  words={words}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </span>
            <span className="mt-2 lg:mt-0 lg:ml-2">
              scalable Backend systems
            </span>
          </h2>

          <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://www.linkedin.com/in/ayush-kothari-522958290/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff] text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Ayushkothari47" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff] text-white text-xl">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/Ayushkotharii47/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff]">
              <img src={leetcodeIcon} alt="LeetCode" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto lg:mr-20 relative mt-10 lg:mt-0">
          
          {/* Responsive container: flex-col on mobile/tablet, relative block on desktop */}
          <div className={`w-full flex flex-col lg:block items-center gap-6 lg:gap-0 lg:w-[28rem] lg:h-[28rem] ${isDesktop ? 'relative' : ''}`}>
            
            {/* Image scales: w-64 (Mobile) -> w-80 (Tablet) -> w-full (Desktop) */}
            <img
              src={profilePic}
              alt="profile"
              className={`animate-float z-20 ${!isDesktop ? 'w-64 h-64 md:w-80 md:h-80 object-contain shadow-2xl rounded-2xl' : 'w-full h-full object-contain absolute'}`}
            />

            {/* Desktop arc icons - only rendered when Desktop (>=1024px) */}
            {isDesktop && circlePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 rounded-full border border-white/20 backdrop-blur-md bg-white/5 flex items-center justify-center z-30 animate-spiralInDesktop"
                style={{
                  top: pos.top,
                  left: pos.left,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <img
                  src={icons[i]}
                  alt="skill"
                  className="w-9 h-9 object-contain"
                />
              </div>
            ))}

            {/* Mobile & Tablet horizontal linear icons - only rendered when <1024px */}
            {!isDesktop && (
                <div className="flex flex-row justify-center items-center gap-4 md:gap-6 w-full mt-2">
                    {icons.map((icon, i) => (
                        <div
                            key={i}
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 backdrop-blur-md bg-white/5 flex items-center justify-center animate-fadeIn"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                            }}
                        >
                            <img
                                src={icon}
                                alt="skill"
                                className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes spiralInDesktop {
            0% {
              transform: translate(400px, -100px) rotate(-540deg) scale(0);
              opacity: 0;
            }
            100% {
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 1;
            }
          }

          .animate-spiralInDesktop {
            animation: spiralInDesktop 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            will-change: transform, opacity;
          }

          @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
              animation: fadeIn 1s ease forwards;
              opacity: 0;
              will-change: opacity, transform;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;