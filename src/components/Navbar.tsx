
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 font-mono",
      isScrolled ? "bg-cyber-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-cyber-accent/20" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-cyber-accent text-2xl font-bold">
          <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <span className="text-cyber-neon">&lt;</span>KG<span className="text-white">/&gt;</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./about
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/youtube" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./videos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/web-design" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./web_dev
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/javascript-art" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./js_art
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/models" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./3d_models
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/picow" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./pico_w
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/game" className="text-white hover:text-cyber-accent transition-all duration-300 hover:scale-110 relative group">
            ./game
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button
            onClick={() => window.location.href = '/contact'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: '2px solid #9b87f5',
              color: '#9b87f5',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              fontSize: '14px',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(155, 135, 245, 0.1)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ./contact
          </button>
        </div>
        
        <button 
          className="md:hidden text-white cursor-pointer hover:text-cyber-accent transition-colors"
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
          <Link to="/" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./home</Link>
          <Link to="/about" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./about</Link>
          <Link to="/youtube" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./videos</Link>
          <Link to="/web-design" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./web_dev</Link>
          <Link to="/javascript-art" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./js_art</Link>
          <Link to="/models" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./3d_models</Link>
          <Link to="/picow" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./pico_w</Link>
          <Link to="/game" onClick={handleMobileMenuClose} className="text-white hover:text-cyber-accent transition-colors text-xl">./game</Link>
          <button
            onClick={() => {
              handleMobileMenuClose();
              window.location.href = '/contact';
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: '2px solid #9b87f5',
              color: '#9b87f5',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              fontSize: '18px',
              marginTop: '16px'
            }}
          >
            ./contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
