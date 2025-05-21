
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ArtGallery from '@/components/ArtGallery';
import Footer from '@/components/Footer';

const Art = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-72 h-72 top-40 -right-20 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-20 -left-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 bottom-1/3 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <ArtGallery />
      <Footer />
    </div>
  );
};

export default Art;
