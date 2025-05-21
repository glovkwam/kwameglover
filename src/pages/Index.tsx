
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  // Change page title
  useEffect(() => {
    document.title = "Kwame Glover | Cybersecurity & Cloud Computing";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
