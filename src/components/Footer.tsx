import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark border-t border-cyber-accent/20">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-accent">Kwame Glover</h3>
            <p className="text-gray-400">
              Digital artist and aspiring cybersecurity professional, creating at the intersection of art and technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/glovkwam/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors transform hover:scale-110 transition duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/kwameglover/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors transform hover:scale-110 transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://editor.p5js.org/kwamglov/sketches" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors transform hover:scale-110 transition duration-300">
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/youtube" className="text-gray-400 hover:text-cyber-accent transition-colors">YouTube</Link>
              </li>
              <li>
                <Link to="/design" className="text-gray-400 hover:text-cyber-accent transition-colors">Design</Link>
              </li>
              <li>
                <Link to="/art" className="text-gray-400 hover:text-cyber-accent transition-colors">JS Art</Link>
              </li>
              <li>
                <Link to="/models" className="text-gray-400 hover:text-cyber-accent transition-colors">3D Models</Link>
              </li>
              <li>
                <Link to="/picow" className="text-gray-400 hover:text-cyber-accent transition-colors">Pico W</Link>
              </li>
              <li>
                <Link to="/game" className="text-gray-400 hover:text-cyber-accent transition-colors">Game</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">Resume</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-accent/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kwame Glover. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Designed and Developed with <span className="text-cyber-accent animate-pulse">❤️</span> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
