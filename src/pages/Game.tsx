
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';

const Game = () => {
  useEffect(() => {
    document.title = "Game Development | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <div className="pt-20 animate-fade-in">
        <GameSection />
      </div>
      <Footer />
    </div>
  );
};

export default Game;
