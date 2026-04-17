import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShootingStar = () => {
  const [starConfig, setStarConfig] = useState(null);

  const generateStar = () => {
    // 1. Pick a random side to start from (0: Top, 1: Right, 2: Bottom, 3: Left)
    const side = Math.floor(Math.random() * 4);
    let startX, startY, endX, endY;

    if (side === 0) { // Top
      startX = Math.random() * 100; startY = -20;
      endX = Math.random() * 100; endY = 120;
    } else if (side === 1) { // Right
      startX = 120; startY = Math.random() * 100;
      endX = -20; endY = Math.random() * 100;
    } else if (side === 2) { // Bottom
      startX = Math.random() * 100; startY = 120;
      endX = Math.random() * 100; endY = -20;
    } else { // Left
      startX = -20; startY = Math.random() * 100;
      endX = 120; endY = Math.random() * 100;
    }

    // 2. Calculate the Angle so the nose points to the destination
    // Math.atan2 gives the angle in radians, we convert to degrees
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    return { startX, startY, endX, endY, angle, id: Math.random() };
  };

  useEffect(() => {
    setStarConfig(generateStar());
  }, []);

  if (!starConfig) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={starConfig.id} // Forces re-render to get new random path
          style={{ rotate: starConfig.angle }}
          initial={{ 
            x: `${starConfig.startX}vw`, 
            y: `${starConfig.startY}vh`, 
            opacity: 0 
          }}
          animate={{ 
            x: `${starConfig.endX}vw`, 
            y: `${starConfig.endY}vh`, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 3.5, // Faster is better for "any direction"
            ease: "linear",
          }}
          onAnimationComplete={() => {
            // Wait 3 seconds then launch a new star from a new side
            setTimeout(() => setStarConfig(generateStar()), 3000);
          }}
          className="absolute flex items-center"
        >
          {/* THE TAIL */}
          <div className="h-[2px] w-[150px] bg-gradient-to-l from-purple-600 via-purple-400 to-transparent blur-[1px]" />
          
          {/* THE HEAD */}
          <div 
            className="h-[4px] w-[4px] bg-white rounded-full shadow-[0_0_20px_4px_#a855f7,0_0_40px_10px_#7c3aed]" 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ShootingStar;