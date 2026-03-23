import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SportHero from '../components/hero/SportHero';
import Stats from '../components/sections/Stats';
import Gallery from '../components/sections/Gallery';
import Achievements from '../components/sections/Achievements';
import Journey from '../components/sections/Journey';
import Coaches from '../components/sections/Coaches';
import Institutes from '../components/sections/Institutes';
import Clubs from '../components/sections/Clubs';
import CTASection from '../components/sections/CTASection';
import { sportsData } from '../data/sportsData';
import { useTheme } from '../theme/ThemeProvider';

const SportPage = () => {
  const { sportKey } = useParams();
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    // Basic validation
    if (!sportsData.find(s => s.id === sportKey)) {
      navigate('/');
    }
  }, [sportKey, navigate]);
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-text overflow-hidden">
      <SportHero sportKey={sportKey} />
      <Stats sportKey={sportKey} />
      <Gallery sportKey={sportKey} />
      <Achievements sportKey={sportKey} />
      <Journey sportKey={sportKey} />
      <Coaches sportKey={sportKey} />
      <Institutes sportKey={sportKey} />
      <Clubs sportKey={sportKey} />
      <CTASection />
    </div>
  );
};

export default SportPage;
