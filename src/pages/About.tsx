
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Me | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
