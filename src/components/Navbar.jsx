import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const timeoutRef = useRef(null);

  const navItems = ["Home", "About", "Journey", "Services", "Portfolio"];

  // Reset hide timer (2 seconds)
  const resetTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  useEffect(() => {
    // Show navbar on scroll
    const handleScroll = () => {
      setVisible(true);
      resetTimer();
    };

    // Show navbar when mouse is near top (within 100px)
    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setVisible(true);
        resetTimer();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 
      transition-all duration-500 ease-in-out
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      bg-transparent`}
      onMouseEnter={() => {
        setVisible(true);
        resetTimer();
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
        {/* Left */}
        <div></div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 text-sm">
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-all duration-300
                transform skew-x-[-20deg]
                bg-gradient-to-br from-purple-500/10 to-white/10 backdrop-blur-lg
                border border-purple-400/30
                px-5 py-2
                ${active === item ? "scale-105" : ""}
                hover:scale-110`}
              >
                <span
                  className={`block transform skew-x-[20deg]
                  ${
                    active === item ? "text-[#cc99ff]" : "text-gray-300"
                  }
                  hover:text-white`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+916396979579"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full
            bg-purple-600 text-white
            border border-purple-400
            shadow-[0_0_12px_rgba(168,85,247,0.6)]
            transition-all duration-300
            hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]"
          >
            <FaPhoneAlt />
            +91 6396979579
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 rounded-full text-center transition-all duration-300
              bg-gradient-to-br from-purple-500/10 to-white/10 backdrop-blur-lg
              border border-purple-400/30
              shadow-[0_0_10px_rgba(168,85,247,0.4)]
              ${
                active === item ? "text-[#cc99ff]" : "text-white"
              }
              hover:shadow-[0_0_18px_rgba(168,85,247,0.7)]`}
            >
              {item}
            </div>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:+916396979579"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full
            bg-purple-600 text-white
            border border-purple-400
            shadow-[0_0_12px_rgba(168,85,247,0.6)]
            transition-all duration-300
            hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]"
          >
            <FaPhoneAlt />
            +91 6396979579
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;