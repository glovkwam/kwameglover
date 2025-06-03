
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtGallery from '@/components/ArtGallery';

const JavaScriptArt = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Background grid decoration */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#00f6ff 1px, transparent 1px), radial-gradient(#00f6ff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}></div>
      
      {/* Animated background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="relative z-10">
        <Navbar />
        <ArtGallery />
        <Footer />
      </div>
    </div>
  );
};

export default JavaScriptArt;
