import React from 'react';
import HomeHero from '../components/hero/HomeHero';
import About from '../components/sections/About';
import SportsOverview from '../components/sections/SportsOverview';
import Posts from '../components/sections/Posts';
import Gallery from '../components/sections/Gallery';
import Achievements from '../components/sections/Achievements';
import Journey from '../components/sections/Journey';
import Coaches from '../components/sections/Coaches';
import Institutes from '../components/sections/Institutes';
import Clubs from '../components/sections/Clubs';
import CTASection from '../components/sections/CTASection';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text overflow-hidden">
      <HomeHero />
      <About />
      <SportsOverview />
      <Posts />
      <Gallery />
      <Achievements />
      <Journey />
      <Coaches />
      <Institutes />
      <Clubs />
      <CTASection />
    </div>
  );
};

export default HomePage;
