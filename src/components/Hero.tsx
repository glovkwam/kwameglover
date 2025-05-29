
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
    <section id="home" className="pt-20 min-h-screen bg-[#1a1d29] relative overflow-hidden flex items-center">
      {/* Decorative corner elements */}
      <div className="absolute top-32 left-12 w-16 h-16 border-l-2 border-t-2 border-cyber-accent/30"></div>
      <div className="absolute bottom-32 right-12 w-16 h-16 border-r-2 border-b-2 border-cyber-accent/30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <h2 className="text-cyber-accent text-lg md:text-xl font-medium tracking-wide">
              Digital Artist & Aspiring Cybersecurity Professional
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Where <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">Creativity</span>
              <br />
              Meets <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">Security</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              I create digital art, JavaScript visualizations, 3D models, and video games while pursuing my passion in cybersecurity and cloud computing.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Link 
                to="/contact" 
                className="px-6 py-3 border border-cyber-accent text-cyber-accent rounded-md hover:bg-cyber-accent/10 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                to="/videos" 
                className="px-6 py-3 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-500/10 transition-all duration-300 font-medium"
              >
                View My Work
              </Link>
            </div>
          </div>
          
          {/* Right Profile Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Profile Image */}
              <div ref={profileRef} className="relative transition-all duration-300">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl">
                  <img 
                    src="/lovable-uploads/48edb253-4d87-43c3-aa41-0ad7b797e209.png" 
                    alt="Kwame Glover" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Explore indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
                <span className="text-sm mb-2">Explore</span>
                <div className="w-px h-6 bg-gray-500"></div>
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
