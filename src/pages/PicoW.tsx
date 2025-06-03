
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PicoWSection from '@/components/PicoWSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import GlobalCMS from '@/components/GlobalCMS';
import { useCMS } from '@/context/CMSContext';

const PicoW = () => {
  useEffect(() => {
    document.title = "Pico W Projects | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <PicoWSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default PicoW;
