
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      isScrolled ? "bg-cyber-dark/90 backdrop-blur-md py-3 shadow-lg" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-cyber-accent text-2xl font-bold">
          <a href="#home">Portfolio<span className="text-white">.</span></a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-cyber-accent transition-colors">Home</a>
          <a href="#videos" className="text-white hover:text-cyber-accent transition-colors">Videos</a>
          <a href="#art" className="text-white hover:text-cyber-accent transition-colors">JS Art</a>
          <a href="#models" className="text-white hover:text-cyber-accent transition-colors">3D Models</a>
          <a href="#game" className="text-white hover:text-cyber-accent transition-colors">Game</a>
          <a href="#contact" className="cyber-button">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-cyber-dark/95 backdrop-blur-md flex flex-col items-center pt-10 space-y-6">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-cyber-accent transition-colors text-xl">Home</a>
          <a href="#videos" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-cyber-accent transition-colors text-xl">Videos</a>
          <a href="#art" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-cyber-accent transition-colors text-xl">JS Art</a>
          <a href="#models" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-cyber-accent transition-colors text-xl">3D Models</a>
          <a href="#game" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-cyber-accent transition-colors text-xl">Game</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="cyber-button text-xl mt-4">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
