
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';

const Game = () => {
  useEffect(() => {
    document.title = "Nanotech Warrior | CreatorKwam";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-80 h-80 top-40 -left-20 blur-3xl"></div>
      <div className="floating-orb w-72 h-72 bottom-10 -right-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/4 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <div className="pt-28 pb-16">
        <GameSection />
      </div>
      <Footer />
    </div>
  );
};

export default Game;
