
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    // Add hover animation to profile image
    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      
      const { left, top, width, height } = profileRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      profileRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(20px)`;
    };
    
    const handleMouseLeave = () => {
      if (!profileRef.current) return;
      profileRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    };
    
    const profileEl = profileRef.current;
    if (profileEl) {
      profileEl.addEventListener('mousemove', handleMouseMove);
      profileEl.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (profileEl) {
        profileEl.removeEventListener('mousemove', handleMouseMove);
        profileEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [profileRef]);

  return (
    <section id="home" className="pt-20 min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Background grid decoration */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#00f6ff 1px, transparent 1px), radial-gradient(#00f6ff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px'
      }}></div>
      
      {/* Animated background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-cyber-accent text-xl md:text-2xl font-semibold">Digital Artist & Aspiring Cybersecurity Professional</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Where <span className="neon-text">Creativity</span> Meets <span className="neon-text">Security</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              I create digital art, JavaScript visualizations, 3D models, and video games while pursuing my passion in cybersecurity and cloud computing.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="cyber-button transform transition duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,246,255,0.5)]">
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/youtube" className="cyber-button transform transition duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,246,255,0.5)]">
                View My Work
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
            <div ref={profileRef} className="relative transition-all duration-300">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-r from-cyber-accent/30 to-cyber-purple/30 flex items-center justify-center overflow-hidden border border-cyber-accent/50 shadow-[0_0_30px_rgba(0,246,255,0.2)] transition-all duration-500">
                <img 
                  src="/lovable-uploads/48edb253-4d87-43c3-aa41-0ad7b797e209.png" 
                  alt="Kwame Glover" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Decorative elements with animations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-accent animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-accent animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-10 -right-2 w-4 h-4 bg-cyber-accent/80 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
              <div className="absolute -bottom-2 left-10 w-3 h-3 bg-cyber-purple/80 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.7s'}}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-sm mb-2">Explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
