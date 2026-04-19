import React, { useEffect } from "react";
import { FaBuilding } from "react-icons/fa";
import hat_icon from '../assets/hat_icon.png';
import man_icon from '../assets/man_icon.png';
import book_icon from '../assets/book_icon.png';

function Resume() {
  useEffect(() => {
    const section = document.getElementById("timeline");
    const progressLine = document.getElementById("progressLine");

    if (!section || !progressLine) return;

    let ticking = false;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progress based on section visibility (NOT scrollY)
      let progress = (windowHeight - rect.top) / (rect.height + windowHeight);

      progress = Math.max(0, Math.min(progress, 1));

      progressLine.style.height = `${progress * 100}%`;

      // Milestones animation
      const milestones = document.querySelectorAll(".milestone");

      milestones.forEach((el, index) => {
        const triggerPoint = (index + 0.5) / milestones.length;

        if (progress >= triggerPoint) {
          el.classList.add(
            "shadow-[0_0_12px_3px_rgba(153,51,255,0.9)]",
            "scale-110"
          );
        } else {
          el.classList.remove(
            "shadow-[0_0_12px_3px_rgba(153,51,255,0.9)]",
            "scale-110"
          );
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="timeline"
      className="bg-none text-white min-h-screen py-10 px-6 md:px-16 lg:px-20 xl:px-32 relative"
    >
      <div className="flex flex-col justify-center items-center text-center pb-10">
        <h1 className="text-4xl text-white mb-4 font-bold">My Journey</h1>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        
        {/* Left Container - Experience */}
        <div className="flex-1 relative z-10 lg:pr-16">
          <span className="bg-[#9933ff] text-white px-4 py-1.5 font-semibold rounded-full uppercase text-xs tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl mt-5 mb-2 font-semibold">Professional Journey</h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Overview of my professional experience and key roles I’ve undertaken.
          </p>

          {/* Experience Cards */}
          <div className="bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 mb-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-[#9933ff] p-2.5 rounded-full shadow-[0_0_10px_rgba(153,51,255,0.5)]">
                <FaBuilding className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white">Software Quality Analyst</h3>
            <p className="text-gray-400 text-sm">Ebizon Digital Pvt Ltd</p>
            <span className="bg-[#9933ff]/20 text-[#cc99ff] border border-[#9933ff]/50 text-xs px-3 py-1 rounded-full mt-3 inline-block">
              March 2025 - Nov 2025
            </span>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              Worked on building responsive web applications using React and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Leadership</span>
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Strategy</span>
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Innovation</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 mb-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-center mb-3">
              <div className="bg-[#9933ff] p-2.5 rounded-full shadow-[0_0_10px_rgba(153,51,255,0.5)]">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 22V2h18v20H3zm2-2h14V4H5v16z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium text-white">Backend Developer Intern</h3>
            <p className="text-gray-400 text-sm">Cognoscente Invnt Pvt Ltd</p>
            <span className="bg-[#9933ff]/20 text-[#cc99ff] border border-[#9933ff]/50 text-xs px-3 py-1 rounded-full mt-3 inline-block">
              Jun 2024 - July 2024
            </span>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              Assisted in developing web interfaces and maintaining company websites.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Teamwork</span>
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Creativity</span>
              <span className="bg-black/30 text-gray-300 border border-[#9933ff]/30 text-xs px-3 py-1 rounded-full">Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Central Timeline (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col items-center relative w-12">
          {/* Base Line */}
          <div className="absolute top-0 bottom-0 w-1 bg-purple-500/30 rounded-full"></div>

          {/* Progress Line */}
          <div
            id="progressLine"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-[#9933ff] shadow-[0_0_10px_2px_rgba(153,51,255,0.7)] transition-all duration-200 rounded-full"
            style={{ height: "0%" }}
          ></div>

          {/* Milestones (Restored to exact original styling) */}
          <div className="flex flex-col justify-between h-full py-10 relative z-10 w-full">
            {[man_icon, hat_icon, book_icon].map((icon, i) => (
              <div key={i} className="flex items-center justify-center relative">
                <div className="milestone flex items-center justify-center w-12 h-12 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 z-20">
                  <img src={icon} alt={`milestone-${i}`} className="w-6 h-6 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Container - Academics */}
        <div className="flex-1 relative z-10 lg:pl-16 mt-12 lg:mt-0">
          <span className="bg-[#9933ff] text-white px-4 py-1.5 font-semibold rounded-full uppercase text-xs tracking-wider">
            Academics
          </span>
          <h2 className="text-3xl mt-5 mb-2 font-semibold">Academic Background</h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Summary of my educational qualifications and awards received.
          </p>

          {/* Academic Cards */}
          <div className="bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 mb-6 shadow-lg transition-transform hover:-translate-y-1">
            <h3 className="text-lg md:text-xl font-medium text-white">Master of Computer Applications (MCA)</h3>
            <p className="text-[#cc99ff] text-sm mt-1">University of Delhi (DU)</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 mb-6 shadow-lg transition-transform hover:-translate-y-1">
            <h3 className="text-lg md:text-xl font-medium text-white">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-[#cc99ff] text-sm mt-1">Dev Bhoomi Uttarakhand University (DBUU)</p>
          </div>

          {/* Certificates Section */}
          <div className="bg-gradient-to-br from-purple-500/10 to-white/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-medium text-white mb-5">Certificates</h3>
            <div className="space-y-4">
              
              <div className="group cursor-pointer">
                <div className="flex justify-between items-center text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  <span>3rd Position @ Navadhara'24</span>
                  <span className="text-[#9933ff] text-xs uppercase font-bold tracking-wider group-hover:text-[#cc99ff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/20 mt-3 group-hover:border-[#9933ff]/60 transition-colors"></div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex justify-between items-center text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  <span>2nd Position @ Padmavyuha Hackathon 2.0</span>
                  <span className="text-[#9933ff] text-xs uppercase font-bold tracking-wider group-hover:text-[#cc99ff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/20 mt-3 group-hover:border-[#9933ff]/60 transition-colors"></div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex justify-between items-center text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  <span>Most Useful Project @ Navadhara'23</span>
                  <span className="text-[#9933ff] text-xs uppercase font-bold tracking-wider group-hover:text-[#cc99ff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/20 mt-3 group-hover:border-[#9933ff]/60 transition-colors"></div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex justify-between items-center text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  <span>Participation @ Lakshagriha Hackathon</span>
                  <span className="text-[#9933ff] text-xs uppercase font-bold tracking-wider group-hover:text-[#cc99ff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/20 mt-3 group-hover:border-[#9933ff]/60 transition-colors"></div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex justify-between items-center text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  <span>Participation @ Padmavyuha Hackathon 1.0</span>
                  <span className="text-[#9933ff] text-xs uppercase font-bold tracking-wider group-hover:text-[#cc99ff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/20 mt-3 group-hover:border-[#9933ff]/60 transition-colors"></div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Resume;