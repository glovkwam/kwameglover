
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GraphicDesignSection from '@/components/GraphicDesignSection';
import Footer from '@/components/Footer';

const GraphicDesign = () => {
  useEffect(() => {
    document.title = "Graphic Design | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-60 -right-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-20 -left-30 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/2 left-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <GraphicDesignSection />
      <Footer />
    </div>
  );
};

export default GraphicDesign;
