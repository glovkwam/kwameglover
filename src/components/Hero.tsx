
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Background grid decoration */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#00f6ff 1px, transparent 1px), radial-gradient(#00f6ff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-cyber-accent text-xl md:text-2xl font-semibold">Digital Artist & Aspiring Cybersecurity Professional</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Where <span className="neon-text">Creativity</span> Meets <span className="neon-text">Security</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              I create digital art, JavaScript visualizations, 3D models, and video games while pursuing my passion in cybersecurity and cloud computing.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="cyber-button">
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#videos" className="cyber-button">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
            <div className="relative">
              {/* Placeholder for a profile image or artistic representation */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-r from-cyber-accent/30 to-cyber-purple/30 flex items-center justify-center overflow-hidden border border-cyber-accent/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {/* Replace with your actual profile image when available */}
                {/* <img src="/profile-image.jpg" alt="Digital Artist" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-accent"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-accent"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
