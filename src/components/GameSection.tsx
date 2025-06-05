
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, ExternalLink, Github, Globe, Gamepad2, Mail } from "lucide-react";

const GameSection = () => {
  const gameInfo = {
    title: "Nanotech Warrior",
    description: "Nanotech Warrior is a visually dynamic 2D platformer that explores humanity's complex relationship with artificial intelligence through the lens of classic gaming aesthetics. Set in the floating metropolis of Skyhaven, the game melds retro platforming mechanics with contemporary themes of technological advancement and environmental preservation. Nanotech Warrior was created in Unity with assets created in photoshop and credited found assets.",
    features: [
      "Multiple levels with increasing difficulty",
      "Interactive AI-powered mechanics",
      "Educational AI concepts and themes",
      "Engaging storyline with character development",
      "Stunning visuals and sound design"
    ],
    technologies: ["Unity", "C#", "Photoshop", "Adobe After Effects"],
    screenshots: [
      "/lovable-uploads/45b9641a-59f8-48ff-b75b-20ce167bfad5.png",
      "/lovable-uploads/7ea81484-03a1-45f7-9769-5c52e11872ae.png",
      "/lovable-uploads/394b3903-afe0-426e-8ca0-c6d66e6fc38f.png"
    ]
  };
  
  return (
    <section id="game" className="section-container bg-transparent">
      <h2 className="section-heading">Nanotech Warrior</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Dive into my video game development, where creativity meets interactivity and digital storytelling.
      </p>
      
      <div className="space-y-12">
        {/* Game Embed - Made Less Wide */}
        <Card className="cyber-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,246,255,0.4)] max-w-5xl mx-auto">
          <CardContent className="p-0">
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
              <div className="absolute top-4 left-4 bg-cyber-accent/90 text-cyber-dark px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🎮 Click Inside to Play
              </div>
              <div className="absolute top-4 right-4 bg-black/80 text-cyber-accent px-3 py-1 rounded-full text-xs">
                Use Arrow Keys + Space
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 text-cyber-accent px-3 py-1 rounded-full text-xs">
                Full Screen Available
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Content Section - Smaller Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Screenshots - Made first two images wider */}
          <div className="space-y-4">
            {/* First image - full width */}
            <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={gameInfo.screenshots[0]} 
                alt="Nanotech Warrior Screenshot 1" 
                className="w-full h-auto object-cover" 
              />
            </div>
            {/* Second image - full width */}
            <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={gameInfo.screenshots[1]} 
                alt="Nanotech Warrior Screenshot 2" 
                className="w-full h-auto object-cover" 
              />
            </div>
            {/* Third image - full width */}
            <div className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={gameInfo.screenshots[2]} 
                alt="Nanotech Warrior Screenshot 3" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          
          <div>
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-4">About the Game</h3>
              <p className="text-gray-300 mb-8">{gameInfo.description}</p>
              
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-3 mb-8">
                {gameInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block bg-cyber-accent rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cyber-dark" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {gameInfo.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-cyber-accent/10 text-cyber-accent text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium mb-1">Email</h5>
                    <a 
                      href="mailto:gloverkwame@gmail.com" 
                      className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                    >
                      gloverkwame@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium mb-1">Play Game</h5>
                    <a 
                      href="https://glovkwam.github.io/Nanotech-Warrior/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                    >
                      glovkwam.github.io/Nanotech-Warrior/
                    </a>
                  </div>
                </div>

                {/* Game Links */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-3 rounded-full">
                    <Code className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium mb-1">itch.io</h5>
                    <a 
                      href="https://glovkwam.itch.io/nanotech-warrior" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 bg-cyber-accent/20 text-cyber-accent rounded-lg hover:bg-cyber-accent/30 transition-colors text-sm"
                    >
                      Play on itch.io <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-3 rounded-full">
                    <Github className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium mb-1">GitHub Pages</h5>
                    <a 
                      href="https://glovkwam.github.io/Nanotech-Warrior/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 bg-cyber-accent/20 text-cyber-accent rounded-lg hover:bg-cyber-accent/30 transition-colors text-sm"
                    >
                      Play on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
