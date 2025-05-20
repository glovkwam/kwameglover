
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GraphicDesignSection from '@/components/GraphicDesignSection';
import Footer from '@/components/Footer';

const GraphicDesign = () => {
  useEffect(() => {
    document.title = "Graphic Design | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <GraphicDesignSection />
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
