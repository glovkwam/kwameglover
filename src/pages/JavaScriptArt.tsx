
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Code, MousePointer, Layers } from 'lucide-react';

const JavaScriptArt = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  const artworks = [
    {
      title: "Random Triangles",
      description: "An interactive visualization that creates randomly colored and positioned triangles that rotate and transform based on user input.",
      file: "/RNDM.html",
      icon: Layers
    },
    {
      title: "Random Cubes", 
      description: "A generative art piece that creates a colorful arrangement of 3D cubes in an isometric grid, with each cube having unique properties.",
      file: "/rr.html",
      icon: Code
    },
    {
      title: "Interactive Butterfly Animation",
      description: "A dynamic animation featuring butterflies that follow mouse movement, combined with abstract shapes and patterns created with code.",
      file: "/fye.html", 
      icon: MousePointer
    },
    {
      title: "Fireworks Display",
      description: "An interactive fireworks simulation that responds to user clicks, creating colorful explosions against a night sky backdrop with houses and clouds.",
      file: "/fl.html",
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-10 -left-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-10 -right-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/3 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          JavaScript <span className="text-cyber-accent">Art Gallery</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mb-12 text-center mx-auto animate-fade-in">
          Explore interactive JavaScript art pieces that combine creative coding with visual elements.
          Each piece demonstrates different techniques and approaches to creating art with code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {artworks.map((artwork, index) => {
            const IconComponent = artwork.icon;
            return (
              <Card key={index} className="cyber-card overflow-hidden h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <IconComponent className="mr-2 h-5 w-5 text-cyber-accent" />
                    {artwork.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {artwork.description}
                  </p>
                  <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                    <iframe 
                      src={artwork.file}
                      title={artwork.title}
                      className="w-full h-full border-0"
                      style={{ width: '100%', height: '100%' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-cyber-light/10 rounded-lg p-8 border border-cyber-accent/20">
          <h3 className="text-xl font-bold text-white mb-4">About JavaScript Art</h3>
          <p className="text-gray-300 mb-4">
            These interactive art pieces were created using p5.js, a JavaScript library designed for creative coding.
            Each piece explores different aspects of generative art, from geometric patterns to particle systems.
          </p>
          <p className="text-gray-300">
            Interact with the pieces by moving your mouse, clicking, or just watching the animations unfold.
            The code behind these works demonstrates principles of creative programming, mathematics, and interactive design.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JavaScriptArt;
