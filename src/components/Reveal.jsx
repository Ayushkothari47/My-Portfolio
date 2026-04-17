import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: false, 
        // 1. 'amount' ensures 30% of the component is visible before it starts
        amount: 0.3, 
        // 2. 'margin' creates an invisible trigger zone (bottom margin is key here)
        margin: "0px 0px -80px 0px" 
      }} 
      transition={{ 
        duration: 0.6, // Slightly slower for a "cooler" feel
        ease: [0.17, 0.55, 0.55, 1], // Custom cubic-bezier for smoother motion
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;