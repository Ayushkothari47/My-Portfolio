import React from 'react';
import { FaStar, FaDownload, FaEye, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

import profile from '../assets/ai_gen.jpg'

function FullPortfolio() {
  return (

    <div className="min-h-screen bg-none flex flex-col lg:flex-row p-6 gap-6 ml-[10%]">

      {/* Left Sidebar */}
      <div className="w-full lg:w-[clamp(240px,22vw,300px)] 
  bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg 
  border border-purple-300/20 rounded-xl shadow-xl 
  p-[clamp(12px,2vw,24px)] 
  flex flex-col justify-start
  h-fit max-h-[90vh] overflow-hidden
  text-center">

        {/* Profile */}
        <img
          src={profile}
          alt={profile}
          className="w-28 h-28 bg-none mx-auto rounded-full border-5 border-[#9933ff] object-cover mb-3"
        />
        <h2 className="text-xl font-semibold text-white">Ayush Kothari</h2>
        <p className="text-[#9933ff] text-sm mb-3">Backend Developer</p>


        <hr className="my-5 border-gray-300" />

        {/* Stats */}
        <div className="flex justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#ffffff]">9</h3>
            <p className="text-gray-500 text-xs">PROJECTS</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ffffff]">112</h3>
            <p className="text-gray-500 text-xs">@ LeetCode</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#ffffff]">3</h3>
            <p className="text-gray-500 text-xs">AWARDS</p>
          </div>
        </div>

        <hr className="my-5 border-gray-300" />

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <a
            href="/Ayush_Kothari_BD.pdf"
            download
            className="flex items-center justify-center gap-2 bg-[#9933ff] text-white py-2 px-4 rounded transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Right Main Content */}
      <div className="flex-1 bg-none rounded-xl shadow-md p-6">
        {/* About Me Badge */}
        <span className="bg-[#9933ff] text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
          ABOUT ME
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-white">
          Transforming Ideas into Digital Reality
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-white text-sm">
          Hi, I’m Ayush — a passionate Developer who enjoys building clean, functional, and user-focused digital experiences. I like working on web technologies and solving problems through code.
          I’m someone who values simplicity, performance, and continuous learning. I enjoy exploring new tools and improving my skills by working on real-world projects and challenges.
        
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 flex items-center">
            <FaGraduationCap className="text-[#9933ff] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-xs">DEGREE</p>
              <h3 className="text-md text-white">Bachelor of Computer Applications</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 flex items-center">
            <FaMapMarkerAlt className="text-[#9933ff] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Lives In</p>
              <h3 className="text-md text-white">Rishikesh, Uttarakhand</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 flex items-center">
            <FaEnvelope className="text-[#9933ff] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="text-md text-white">ayushkotharii47@gmail.com</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 flex items-center">
            <FaPhone className="text-[#9933ff] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <h3 className="text-md text-white">+91 6396979579</h3>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 flex items-center">
            <FaClock className="text-[#9933ff] text-2xl mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Availability</p>
              <h3 className="text-md text-white">Open to Work</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FullPortfolio;
