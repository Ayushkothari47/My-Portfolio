import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS / Tailwind", level: 75 },
  { name: "UI/UX Implementation", level: 70 },
];

const Skill = () => {
  const skillRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (skillRef.current) observer.observe(skillRef.current);
  }, []);

  useEffect(() => {
    if (animate) {
      skills.forEach((skill, index) => {
        let start = 0;
        const end = skill.level;
        const duration = 1400;
        const increment = end / (duration / 20);

        const interval = setInterval(() => {
          start += increment;
          setProgressValues((prev) => {
            const updated = [...prev];
            updated[index] = Math.min(Math.round(start), end);
            return updated;
          });

          if (start >= end) clearInterval(interval);
        }, 20);
      });
    }
  }, [animate]);

  return (
     <motion.div
          // className="bg-[#141414] flex flex-col items-center px-4 py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
    <div className="flex items-end justify-end">
    
      <div ref={skillRef} className="px-6 py-10 w-full max-w-3xl font-sans text-left">
        {/* Badge */}
        <span className="bg-[#2a191b] text-[#ff4e49] font-bold px-4 py-1 rounded-xl text-xs inline-block mb-3">
          CORE SKILLS
        </span>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Technical Proficiency
        </h2>

        {/* Progress Bars */}
        {skills.map((skill, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between text-sm mb-1 text-white">
              <span>{skill.name}</span>
              <span>{progressValues[index]}%</span>
            </div>

            <div className="w-full h-3 bg-[#202020] rounded-full overflow-hidden">
            
              <div
                className="h-full  bg-[#ff4e49] rounded-full transition-all duration-[1400ms] ease-out"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Skill;
