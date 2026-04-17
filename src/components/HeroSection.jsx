import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { SiLeetcode } from "react-icons/si";

import leetcodeIcon from "../assets/leetCodeIcon.png"

import profilePic from '../assets/ai_gen.png';
import { Typewriter } from 'react-simple-typewriter';

import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/js.png";
import nodeJs from "../assets/nodeJs.png";
import mongoIcon from "../assets/mongo.png";
import sqlIcon from "../assets/sql.png";

const words = ['Design', 'Develop', 'Test'];

function HeroSection() {
  // Balanced arc positions
  const circlePositions = [
    { top: '0%', left: '-40px' },
    { top: '23%', left: '-100px' },
    { top: '45%', left: '-130px' },
    { top: '70%', left: '-100px' },
    { top: '89%', left: '-40px' },
  ];

  const icons = [pythonIcon, jsIcon, nodeJs, mongoIcon, sqlIcon];

  return (
    <div className="w-full min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden bg-transparent">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl text-center md:text-left relative z-20">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Hi, I'm <span className="text-[#9933ff]">Ayush Kothari</span>
          </h1>

          <h2 className="text-lg md:text-2xl mb-6">
            <span className="flex items-center justify-center md:justify-start">I can &nbsp;
              <span className="text-[#9933ff]">
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
              &nbsp;scalable Backend systems</span>
          </h2>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/ayush-kothari-522958290/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff] text-white text-xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Ayushkothari47"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff] text-white text-xl"
            >
              <FaGithub />
            </a>

            {/* LeetCode Image Icon */}
            <a
              href="https://leetcode.com/u/Ayushkotharii47/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-200 bg-gray-500/20 border border-white/10 rounded-full p-4 hover:bg-[#9933ff]"
            >
              <img
                src={leetcodeIcon}
                alt="LeetCode"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center md:justify-end w-full md:w-auto md:mr-20 relative">
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
            {/* Profile Image */}
            <img
              src={profilePic}
              alt="profile"
              className="w-full h-full object-contain shadow-2xl rounded-2xl animate-float relative z-20"
            />

            {/* Icons Container */}
            {circlePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 backdrop-blur-md bg-white/5 flex items-center justify-center z-10 animate-spiralIn"
                style={{
                  top: pos.top,
                  left: pos.left,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <img
                  src={icons[i]}
                  alt="skill"
                  className="w-7 h-7 md:w-9 md:h-9 object-contain"
                />
              </div>
            ))}
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

          @keyframes spiralIn {
            0% {
              /* Start small and off to the right */
              transform: translate(400px, -100px) rotate(-540deg) scale(0);
              opacity: 0;
            }
            100% {
              /* Return to natural position (top/left defined in style) */
              transform: translate(0, 0) rotate(0deg) scale(1);
              opacity: 1;
            }
          }

          .animate-spiralIn {
            animation: spiralIn 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
}

export default HeroSection;