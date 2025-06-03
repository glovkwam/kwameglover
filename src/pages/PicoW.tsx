
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PicoWSection from '@/components/PicoWSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const PicoW = () => {
  useEffect(() => {
    document.title = "Pico W Projects | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Flickering background grid decoration */}
      <div className="absolute inset-0 flickering-grid"></div>
      
      {/* Animated background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="relative z-10">
        <Navbar />
        <PicoWSection />
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default PicoW;
