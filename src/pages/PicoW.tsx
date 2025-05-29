
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PicoWSection from '@/components/PicoWSection';
import Footer from '@/components/Footer';

const PicoW = () => {
  useEffect(() => {
    document.title = "Pico W Projects | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-72 h-72 top-20 -right-20 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-40 -left-40 blur-3xl"></div>
      <div className="floating-orb w-96 h-96 top-2/3 right-1/3 blur-3xl opacity-10 animate-rotate-slow"></div>
      
      <Navbar />
      <PicoWSection />
      <Footer />
    </div>
  );
};

export default PicoW;
