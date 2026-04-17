import React from 'react'
import Reveal from '../components/Reveal';
import ShootingStars from '../components/ShootingStars'; // Import here
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import heroBanner_img from '../assets/bg.jpg';

function HomePage() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen" // Added 'relative'
      style={{
        backgroundImage: `url(${heroBanner_img})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 1. Shooting Stars stays in the background */}
      <ShootingStars />

      {/* 2. Your Content stays in front */}
      <div className="relative z-10"> 
        <Navbar />
        <HeroSection /> 

        <Reveal><About /></Reveal>
        <Reveal><Portfolio /></Reveal>
        <Reveal><Resume /></Reveal>
        <Reveal><Project /></Reveal>
      </div>
    </div>
  )
}

export default HomePage;