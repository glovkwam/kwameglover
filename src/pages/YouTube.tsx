
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import YouTubeSection from '@/components/YouTubeSection';
import Footer from '@/components/Footer';

const YouTube = () => {
  useEffect(() => {
    document.title = "YouTube Videos | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <YouTubeSection />
      </div>
      <Footer />
    </div>
  );
};

export default YouTube;
