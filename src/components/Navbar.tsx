
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'YouTube', path: '/videos' },
    { name: 'Web Design', path: '/web-design' },
    { name: 'JS Art', path: '/js-art' },
    { name: '3D Models', path: '/models' },
    { name: 'Pico W', path: '/pico-w' },
    { name: 'Game', path: '/game' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a1d29]/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-cyber-accent">Portfolio</span>
            <span className="text-cyber-accent text-xl">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyber-accent relative ${
                  location.pathname === item.path ? 'text-cyber-accent' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-4 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-500/10 transition-all duration-300 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyber-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-[#1a1d29]/95 backdrop-blur-md border-b border-cyber-accent/20">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-all duration-300 hover:text-cyber-accent ${
                    location.pathname === item.path ? 'text-cyber-accent' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
