
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad, Link, Code } from 'lucide-react';

const GameSection = () => {
  // Replace with your actual game information
  const gameInfo = {
    title: "Cyber Defense",
    description: "An immersive game where players defend a digital network from cyber attacks. Combining strategy, action, and cybersecurity concepts, players must protect critical infrastructure while learning about real security principles.",
    features: [
      "Multiple levels with increasing difficulty",
      "Interactive network defense mechanics",
      "Educational cybersecurity concepts",
      "Engaging storyline with character development",
      "Stunning visuals and sound design"
    ],
    technologies: ["Unity", "C#", "Blender", "Adobe After Effects"],
    thumbnail: "https://source.unsplash.com/random/1200x800?video+game",
    screenshots: [
      "https://source.unsplash.com/random/800x450?game+screenshot+1",
      "https://source.unsplash.com/random/800x450?game+screenshot+2",
      "https://source.unsplash.com/random/800x450?game+screenshot+3"
    ]
  };
  
  return (
    <section id="game" className="section-container bg-transparent">
      <h2 className="section-heading">Video Game</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Dive into my video game development, where creativity meets interactivity and digital storytelling.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <img 
                  src={gameInfo.thumbnail} 
                  alt={gameInfo.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad className="h-5 w-5 text-cyber-accent" />
                    <span className="text-cyber-accent font-semibold text-sm uppercase tracking-wider">
                      Game Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{gameInfo.title}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            {gameInfo.screenshots.map((screenshot, index) => (
              <div key={index} className={`rounded-lg overflow-hidden ${index === 2 ? 'col-span-2' : ''}`}>
                <img 
                  src={screenshot} 
                  alt={`Game Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
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
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark">
                <Gamepad className="mr-2 h-4 w-4" />
                Play Demo
              </Button>
              <Button variant="outline" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10">
                <Code className="mr-2 h-4 w-4" />
                View Technical Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
