
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ArtGallery from '@/components/ArtGallery';
import Footer from '@/components/Footer';

const Art = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <ArtGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Art;
