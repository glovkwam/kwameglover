
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtGallery from '@/components/ArtGallery';

const JavaScriptArt = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-10 -left-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-10 -right-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/3 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <ArtGallery />
      <Footer />
    </div>
  );
};

export default JavaScriptArt;
