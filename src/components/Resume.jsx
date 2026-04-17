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
      className="bg-none text-white min-h-screen py-6 px-4 md:px-16 lg:px-32 relative"
    >
      <div className="flex flex-col justify-center items-center text-center py-2 px-4 md:px-16 lg:px-32">
        <h1 className="text-4xl text-white mb-4">My Journey</h1>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        {/* Left Container - Experience */}
        <div className="flex-1 relative z-10 pr-16">
          <span className="bg-[#9933ff] text-white px-3 py-2 font-semibold rounded-full uppercase text-xs">
            Experience
          </span>
          <h2 className="text-3xl mt-4 mb-2">Professional Journey</h2>
          <p className="text-gray-300 mb-6">
            Overview of my professional experience and key roles I’ve undertaken.
          </p>

          {/* Experience Cards */}
          <div className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 rounded-lg p-6 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-[#9933ff] p-2 rounded-full">
                <FaBuilding className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl">Software Quality Analyst</h3>
            <p className="text-gray-400 text-xs">Ebizon Digital Pvt Ltd</p>
            <span className="bg-[#9933ff] text-white border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full mt-3 inline-block">
              March 2025 - Nov 2025
            </span>
            <p className="text-white text-sm mt-2">
              Worked on building responsive web applications using React and Tailwind CSS.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Leadership
              </span>
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Strategy
              </span>
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Innovation
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 rounded-lg p-6 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#9933ff] p-2 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 22V2h18v20H3zm2-2h14V4H5v16z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl text-white">Backend Developer Intern</h3>
            <p className="text-gray-400 text-xs">Cognoscente Invnt Pvt Ltd</p>
            <span className="bg-[#9933ff] text-white border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full mt-3 inline-block">
              Jun 2024 - July 2024
            </span>
            <p className="text-white text-sm mt-2">
              Assisted in developing web interfaces and maintaining company websites.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Teamwork
              </span>
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Creativity
              </span>
              <span className="bg-[#2c1a1a] text-[#ffffff] border-1 border-[#9933ff] text-xs px-2 py-1 rounded-full">
                Problem Solving
              </span>
            </div>
          </div>
        </div>

        {/* Divider with Icons */}
        {/* Timeline */}
        <div className="hidden lg:flex flex-col items-center relative w-1">
          {/* Base Line */}
          <div className="absolute top-0 bottom-0 w-1 bg-purple-500/30"></div>

          {/* Progress Line */}
          <div
            id="progressLine"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-[#9933ff] shadow-[0_0_10px_2px_rgba(153,51,255,0.7)] transition-all duration-200"
            style={{ height: "0%" }}
          ></div>

          {/* Milestones */}
       <div className="flex flex-col justify-between h-full py-10 relative z-10">
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
        <div className="flex-1 relative z-10 pl-16">
          <span className="bg-[#9933ff] text-white px-3 py-2 font-semibold rounded-full uppercase text-xs">
            Academics
          </span>
          <h2 className="text-3xl mt-4 mb-2">Academic Background</h2>
          <p className="text-gray-300 mb-6">
            Summary of my educational qualifications and awards received.
          </p>

          {/* Academic Cards */}
          <div className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 rounded-lg p-6 mb-6 shadow-md">
            <h3 className="text-xl text-white">Master of Computer Applications (MCA)</h3>
            <p className="text-[#9933ff] text-sm">University of Delhi (DU)</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 rounded-lg p-6 mb-6 shadow-md">
            <h3 className="text-xl text-white">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-[#9933ff] text-sm">Dev Bhoomi Uttarakhand University (DBUU)</p>
          </div>

          {/* Certificates Section */}
          <div className="bg-gradient-to-br from-purple-500/1 to-white/10 backdrop-blur-lg border border-purple-300/20 rounded-lg p-6 mb-6 shadow-md">
            <h3 className="text-xl text-white mb-3">Certificates</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>3rd Position @ Navadhara'24</span>
                  <span className="text-[#ffffff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/40 mt-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>2nd Position @ Padmavyuha Hackathon 2.0</span>
                  <span className="text-[#ffffff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/40 mt-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>Most Useful Project Award @ Navadhara'23</span>
                  <span className="text-[#ffffff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/40 mt-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>Participation Certificate @ Lakshagriha Hackathon</span>
                  <span className="text-[#ffffff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/40 mt-2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>Participation Certificate @ Padmavyuha Hackathon 1.0</span>
                  <span className="text-[#ffffff]">View</span>
                </div>
                <div className="border-b border-[#9933ff]/40 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;