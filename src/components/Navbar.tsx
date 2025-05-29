
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLink {
  to: string;
  label: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks: NavLink[] = [
    { to: '/', label: './home' },
    { to: '/about', label: './about' },
    { to: '/youtube', label: './videos' },
    { to: '/web-design', label: './web_dev' },
    { to: '/javascript-art', label: './js_art' },
    { to: '/models', label: './3d_models' },
    { to: '/picow', label: './pico_w' },
    { to: '/game', label: './game' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="cyber-button cyber-button-purple text-sm px-4 py-2">
            ./contact
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white hover:text-cyber-accent transition-colors"
          onClick={toggleMobileMenu}
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-cyber-dark/95 backdrop-blur-md flex flex-col items-center pt-10 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              onClick={closeMobileMenu} 
              className="text-white hover:text-cyber-accent transition-colors text-xl"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className="cyber-button cyber-button-purple text-lg px-6 py-3 mt-4"
          >
            ./contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
