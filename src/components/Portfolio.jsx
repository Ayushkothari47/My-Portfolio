import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

import profile from '../assets/ai_gen.jpg'; // Make sure the path is correct

function FullPortfolio() {
  return (
    // FIXED: ml-0 on mobile, lg:ml-[10%] on desktop. Added w-full and max-w constraints.
    <div className="min-h-screen flex flex-col lg:flex-row p-4 md:p-6 gap-6 w-full lg:w-[85%] ml-0 lg:ml-[10%]">

      {/* Left Sidebar */}
      <div className="w-full lg:w-[clamp(240px,22vw,300px)] 
        bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg 
        border border-purple-300/20 rounded-xl shadow-xl 
        p-6 
        flex flex-col justify-start
        h-fit lg:sticky lg:top-10
        text-center"
      >
        {/* Profile */}
        <img
          src={profile}
          alt="Ayush Kothari"
          className="w-28 h-28 mx-auto rounded-full border-[3px] border-[#9933ff] object-cover mb-3 shadow-[0_0_15px_rgba(153,51,255,0.4)]"
        />
        <h2 className="text-xl font-semibold text-white">Ayush Kothari</h2>
        <p className="text-[#9933ff] text-sm mb-3 font-medium">Backend Developer</p>

        <hr className="my-5 border-white/10" />

        {/* Stats */}
        <div className="flex justify-between mb-6 px-2">
          <div>
            <h3 className="text-lg font-bold text-white">9</h3>
            <p className="text-gray-400 text-xs tracking-wider">PROJECTS</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">112</h3>
            <p className="text-gray-400 text-xs tracking-wider">LEETCODE</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">3</h3>
            <p className="text-gray-400 text-xs tracking-wider">AWARDS</p>
          </div>
        </div>

        <hr className="my-5 border-white/10" />

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-2">
          <a
            href="/Ayush_Kothari_BD.pdf"
            download
            className="flex items-center justify-center gap-2 bg-[#9933ff] text-white py-2.5 px-4 rounded-lg transition-all hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(153,51,255,0.6)]"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Right Main Content */}
      <div className="flex-1 rounded-xl p-2 md:p-6 mt-4 lg:mt-0">
        
        {/* About Me Badge */}
        <span className="bg-[#9933ff]/20 border border-[#9933ff]/50 text-[#cc99ff] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 inline-block">
          ABOUT ME
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
          Transforming Ideas into <br className="hidden md:block"/> Digital Reality
        </h2>

        {/* Description - Fixed conflicting text colors */}
        <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-3xl">
          Hi, I’m Ayush — a passionate Developer who enjoys building clean, functional, and user-focused digital experiences. I like working on web technologies and solving problems through code. I’m someone who values simplicity, performance, and continuous learning. I enjoy exploring new tools and improving my skills by working on real-world projects and challenges.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-white/5 backdrop-blur-md border border-purple-300/10 flex items-center transition-transform hover:-translate-y-1">
            <FaGraduationCap className="text-[#9933ff] text-3xl mr-4 shrink-0" />
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Degree</p>
              <h3 className="text-sm md:text-base font-medium text-white">Bachelor of Computer Applications</h3>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-white/5 backdrop-blur-md border border-purple-300/10 flex items-center transition-transform hover:-translate-y-1">
            <FaMapMarkerAlt className="text-[#9933ff] text-3xl mr-4 shrink-0" />
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Lives In</p>
              <h3 className="text-sm md:text-base font-medium text-white">Rishikesh, Uttarakhand</h3>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-white/5 backdrop-blur-md border border-purple-300/10 flex items-center transition-transform hover:-translate-y-1 overflow-hidden">
            <FaEnvelope className="text-[#9933ff] text-3xl mr-4 shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
              {/* Added break-all so long emails don't break mobile layout */}
              <h3 className="text-sm md:text-base font-medium text-white break-all sm:break-normal">ayushkotharii47@gmail.com</h3>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-white/5 backdrop-blur-md border border-purple-300/10 flex items-center transition-transform hover:-translate-y-1">
            <FaPhone className="text-[#9933ff] text-3xl mr-4 shrink-0" />
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</p>
              <h3 className="text-sm md:text-base font-medium text-white">+91 6396979579</h3>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/5 to-white/5 backdrop-blur-md border border-purple-300/10 flex items-center transition-transform hover:-translate-y-1 sm:col-span-2 md:col-span-1">
            <FaClock className="text-[#9933ff] text-3xl mr-4 shrink-0" />
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Availability</p>
              <h3 className="text-sm md:text-base font-medium text-white">Open to Work</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FullPortfolio;