
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import YouTubeSection from '@/components/YouTubeSection';
import ArtGallery from '@/components/ArtGallery';
import MaxMSPSection from '@/components/MaxMSPSection';
import ModelViewer from '@/components/ModelViewer';
import GraphicDesignSection from '@/components/GraphicDesignSection';
import PicoWSection from '@/components/PicoWSection';
import GameSection from '@/components/GameSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Change page title
  useEffect(() => {
    document.title = "Digital Artist Portfolio | Cybersecurity & Cloud Computing";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <Hero />
      <YouTubeSection />
      <GraphicDesignSection />
      <ArtGallery />
      <MaxMSPSection />
      <ModelViewer />
      <PicoWSection />
      <GameSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
