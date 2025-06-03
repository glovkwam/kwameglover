
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const YouTube = () => {
  useEffect(() => {
    document.title = "YouTube Videos | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default YouTube;
