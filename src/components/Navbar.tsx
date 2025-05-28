
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      isScrolled ? "bg-cyber-dark/90 backdrop-blur-md py-3 shadow-lg" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-cyber-accent text-2xl font-bold">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            Portfolio<span className="text-white">.</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">Home</Link>
          <Link to="/about" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">About</Link>
          <Link to="/youtube" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">YouTube</Link>
          <Link to="/web-design" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">Web Design</Link>
          <Link to="/javascript-art" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">JS Art</Link>
          <Link to="/models" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">3D Models</Link>
          <Link to="/picow" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">Pico W</Link>
          <Link to="/game" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110">Game</Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border-2 border-cyber-accent text-cyber-accent rounded-md hover:bg-cyber-accent/10 transition-all duration-300 font-medium"
          >
            Contact
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white cursor-pointer"
          onClick={handleMobileMenuToggle}
          type="button"
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
      
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-cyber-dark/95 backdrop-blur-md flex flex-col items-center pt-10 space-y-6 animate-fade-in">
          <Link to="/" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">Home</Link>
          <Link to="/about" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">About</Link>
          <Link to="/youtube" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">YouTube</Link>
          <Link to="/web-design" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">Web Design</Link>
          <Link to="/javascript-art" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">JS Art</Link>
          <Link to="/models" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">3D Models</Link>
          <Link to="/picow" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">Pico W</Link>
          <Link to="/game" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">Game</Link>
          <Link 
            to="/contact" 
            onClick={handleMobileMenuClose} 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-cyber-accent text-cyber-accent rounded-md hover:bg-cyber-accent/10 transition-all duration-300 font-medium text-xl mt-4"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
