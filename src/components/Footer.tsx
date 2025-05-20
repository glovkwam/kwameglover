
import React from 'react';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark border-t border-cyber-accent/20">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-accent">Portfolio</h3>
            <p className="text-gray-400">
              Digital artist and aspiring cybersecurity professional, creating at the intersection of art and technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyber-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#youtube" className="text-gray-400 hover:text-cyber-accent transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#design" className="text-gray-400 hover:text-cyber-accent transition-colors">Design</a>
              </li>
              <li>
                <a href="#art" className="text-gray-400 hover:text-cyber-accent transition-colors">JS Art</a>
              </li>
              <li>
                <a href="#maxmsp" className="text-gray-400 hover:text-cyber-accent transition-colors">MaxMSP</a>
              </li>
              <li>
                <a href="#models" className="text-gray-400 hover:text-cyber-accent transition-colors">3D Models</a>
              </li>
              <li>
                <a href="#picow" className="text-gray-400 hover:text-cyber-accent transition-colors">Pico W</a>
              </li>
              <li>
                <a href="#game" className="text-gray-400 hover:text-cyber-accent transition-colors">Game</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyber-accent transition-colors">Contact</a>
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
            &copy; {currentYear} Digital Portfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Designed and Developed with ❤️ and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
