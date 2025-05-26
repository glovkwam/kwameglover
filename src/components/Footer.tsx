
import React from 'react';
import { Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-light border-t border-cyber-accent/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-accent to-cyber-purple rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L16 6L14.74 12.26L22 12L15.74 13.09L18 16L11.74 14.74L12 22L10.91 15.74L8 18L9.26 11.74L2 12L8.26 10.91L6 8L12.26 9.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-cyber-accent">CreatorKwam</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <h4 className="text-cyber-accent font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/glovkwam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-accent transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.youtube.com/@CreatorKwam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-accent transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 CreatorKwam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
