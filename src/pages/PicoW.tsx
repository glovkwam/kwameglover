
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PicoWSection from '@/components/PicoWSection';
import Footer from '@/components/Footer';

const PicoW = () => {
  useEffect(() => {
    document.title = "Pico W Projects | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <PicoWSection />
      </div>
      <Footer />
    </div>
  );
};

export default PicoW;
