
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const profileRef = useRef(null);
  const codeRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <section id="home" className="pt-20 min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Animated code matrix background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f6ff' fill-opacity='0.1'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8'%3E01%3C/text%3E%3Ctext x='25' y='35' font-family='monospace' font-size='8'%3E10%3C/text%3E%3Ctext x='45' y='55' font-family='monospace' font-size='8'%3E11%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'matrix-scroll 20s linear infinite'
      }}></div>
      
      {/* Floating code elements */}
      <div className="absolute top-1/4 left-1/4 text-cyber-accent/30 font-mono text-sm animate-float" style={{animationDelay: '0s'}}>
        {'{ code: "life" }'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-cyber-neon/20 font-mono text-xs animate-float" style={{animationDelay: '2s'}}>
        console.log("hello_world");
      </div>
      <div className="absolute bottom-1/3 left-1/6 text-cyber-accent/25 font-mono text-sm animate-float" style={{animationDelay: '4s'}}>
        &lt;/creativity&gt;
      </div>

      {/* Animated background lights with tech feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="text-cyber-accent text-xl md:text-2xl font-semibold font-mono">
              <span className="text-cyber-neon">$</span> whoami
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-mono">
              Digital <span className="neon-text">Artist</span> &<br/>
              <span className="neon-text">Cyber</span> Defender
            </h1>
            <div className="text-lg text-gray-300 max-w-lg font-mono space-y-2">
              <div><span className="text-cyber-accent">{'>'}</span> Creative coding & digital art</div>
              <div><span className="text-cyber-accent">{'>'}</span> Cybersecurity & cloud computing</div>
              <div><span className="text-cyber-accent">{'>'}</span> Interactive experiences & games</div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => window.location.href = '/contact'}
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
                  fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'rgba(155, 135, 245, 0.1)';
                  target.style.transform = 'scale(1.05)';
                  target.style.boxShadow = '0 0 15px rgba(155, 135, 245, 0.5)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.transform = 'scale(1)';
                  target.style.boxShadow = 'none';
                }}
              >
                ./contact
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                onClick={() => window.location.href = '/youtube'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'transparent',
                  border: '2px solid #00f6ff',
                  color: '#00f6ff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'rgba(0, 246, 255, 0.1)';
                  target.style.transform = 'scale(1.05)';
                  target.style.boxShadow = '0 0 15px rgba(0, 246, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.transform = 'scale(1)';
                  target.style.boxShadow = 'none';
                }}
              >
                ./portfolio
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-float relative">
            <div ref={profileRef} className="relative transition-all duration-300">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-lg bg-gradient-to-r from-cyber-accent/30 to-cyber-purple/30 flex items-center justify-center overflow-hidden border-2 border-cyber-accent/50 shadow-[0_0_30px_rgba(0,246,255,0.2)] transition-all duration-500 tech-border">
                <img 
                  src="/lovable-uploads/48edb253-4d87-43c3-aa41-0ad7b797e209.png" 
                  alt="Kwame Glover" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Tech decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyber-accent animate-pulse font-mono text-xs text-cyber-accent flex items-start justify-start">
                &lt;/&gt;
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyber-accent animate-pulse font-mono text-xs text-cyber-accent flex items-end justify-end" style={{animationDelay: '0.5s'}}>
                {}
              </div>
              <div className="absolute top-10 -right-6 px-2 py-1 bg-cyber-accent/80 rounded text-cyber-dark text-xs font-mono animate-ping" style={{animationDuration: '3s'}}>
                online
              </div>
              <div className="absolute -bottom-2 left-10 px-2 py-1 bg-cyber-purple/80 rounded text-white text-xs font-mono animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.7s'}}>
                dev
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-sm mb-2 font-mono">scroll_down()</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
