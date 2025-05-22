
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import YouTubeSection from '@/components/YouTubeSection';
import Footer from '@/components/Footer';
import { CMSProvider } from '@/context/CMSContext';
import GlobalCMS from '@/components/GlobalCMS';

const YouTube = () => {
  useEffect(() => {
    document.title = "YouTube Videos | Digital Artist Portfolio";
  }, []);

  return (
    <CMSProvider>
      <div className="min-h-screen bg-cyber-dark text-white animated-bg">
        <div className="floating-orb w-64 h-64 top-20 -left-20 blur-3xl"></div>
        <div className="floating-orb w-96 h-96 bottom-40 -right-40 blur-3xl"></div>
        <div className="floating-orb w-80 h-80 bottom-0 left-1/2 blur-3xl opacity-20 animate-rotate-slow"></div>
        
        <Navbar />
        <YouTubeSection />
        <GlobalCMS />
        <Footer />
      </div>
    </CMSProvider>
  );
};

export default YouTube;
