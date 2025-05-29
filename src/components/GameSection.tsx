
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad, Link, Terminal, Code } from 'lucide-react';

const GameSection = () => {
  const gameInfo = {
    title: "Nanotech_Warrior.exe",
    description: "A cyberpunk-inspired 2D platformer exploring the symbiotic relationship between human creativity and artificial intelligence. Built with Unity engine and featuring custom pixel art assets, this interactive experience challenges players to navigate through digital landscapes while contemplating our technological future.",
    features: [
      "Multi-threaded level progression system",
      "AI-driven dynamic difficulty adjustment", 
      "Interactive cyberpunk narrative elements",
      "Real-time particle effect rendering",
      "Optimized collision detection algorithms"
    ],
    technologies: ["Unity Engine", "C# Scripting", "Adobe Photoshop", "Digital Audio Workstation"],
    screenshots: [
      "/lovable-uploads/45b9641a-59f8-48ff-b75b-20ce167bfad5.png",
      "/lovable-uploads/d981768f-0eab-4fe0-b14b-2a93f334ae71.png",
      "/lovable-uploads/394b3903-afe0-426e-8ca0-c6d66e6fc38f.png"
    ]
  };

  const handleItchClick = () => {
    window.open("https://glovkwam.itch.io/nanotech-warrior", "_blank", "noopener,noreferrer");
  };

  const handleOnlineClick = () => {
    window.open("https://glovkwam.github.io/Nanotech-Warrior/", "_blank", "noopener,noreferrer");
  };
  
  return (
    <section id="game" className="section-container bg-transparent relative">
      <div className="code-matrix"></div>
      
      <h2 className="section-heading font-mono">
        <Terminal className="inline mr-3 h-8 w-8 text-cyber-accent" />
        Nanotech_Warrior
      </h2>
      <p className="text-gray-300 max-w-2xl mb-12 font-mono">
        <span className="text-cyber-accent">{'>'}</span> Interactive gaming experience where cyberpunk aesthetics meet AI storytelling
      </p>
      
      <div className="space-y-12">
        <Card className="cyber-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,246,255,0.4)] max-w-5xl mx-auto">
          <CardContent className="p-0 relative">
            <div className="game-responsive-narrow mx-auto">
              <iframe 
                src="https://glovkwam.github.io/Nanotech-Warrior/" 
                width="100%" 
                height="100%"
                title="Nanotech Warrior - Interactive Game"
                className="w-full h-full border-0 rounded-lg"
                frameBorder="0"
                allowFullScreen
                allow="gamepad; fullscreen; pointer-lock; clipboard-write"
                style={{ 
                  pointerEvents: 'auto',
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  border: 'none',
                  outline: 'none',
                  zIndex: 10
                }}
                loading="eager"
              ></iframe>
              <div className="absolute top-4 left-4 bg-cyber-accent/90 text-cyber-dark px-4 py-2 rounded-lg text-sm font-bold animate-pulse font-mono">
                🎮 execute_game.sh
              </div>
              <div className="absolute top-4 right-4 bg-black/80 text-cyber-accent px-3 py-1 rounded-lg text-xs font-mono">
                WASD + SPACE
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 text-cyber-accent px-3 py-1 rounded-lg text-xs font-mono">
                fullscreen_mode: true
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {gameInfo.screenshots.map((screenshot, index) => (
              <div key={index} className={`rounded-lg overflow-hidden border border-cyber-accent/30 ${index === 2 ? 'col-span-2' : ''} transition-transform duration-300 hover:scale-105 hover:border-cyber-accent/60`}>
                <img 
                  src={screenshot} 
                  alt={`Nanotech Warrior Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
          
          <div>
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                <Code className="mr-2 h-6 w-6 text-cyber-accent" />
                ./game_info
              </h3>
              <p className="text-gray-300 mb-8 font-mono leading-relaxed">{gameInfo.description}</p>
              
              <h4 className="text-xl font-semibold text-white mb-4 font-mono text-cyber-accent">
                {'>'} features.list()
              </h4>
              <ul className="space-y-3 mb-8">
                {gameInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start font-mono">
                    <span className="inline-block bg-cyber-accent rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cyber-dark" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-xl font-semibold text-white mb-4 font-mono text-cyber-accent">
                {'>'} tech_stack.json
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {gameInfo.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-cyber-accent/10 text-cyber-accent text-sm rounded-lg border border-cyber-accent/30 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleItchClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    border: '2px solid #9b87f5',
                    color: '#9b87f5',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(155, 135, 245, 0.1)';
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 0 15px rgba(155, 135, 245, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Gamepad className="h-5 w-5" />
                  ./itch_io
                </button>
                <button
                  onClick={handleOnlineClick}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    border: '2px solid #00f6ff',
                    color: '#00f6ff',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 246, 255, 0.1)';
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 0 15px rgba(0, 246, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Link className="h-5 w-5" />
                  ./play_online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
