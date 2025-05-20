
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ArtGallery from '@/components/ArtGallery';
import ModelViewer from '@/components/ModelViewer';
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
      <VideoSection />
      <ArtGallery />
      <ModelViewer />
      <GameSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
