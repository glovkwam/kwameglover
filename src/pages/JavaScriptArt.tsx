
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Code, MousePointer, Layers } from 'lucide-react';

const JavaScriptArt = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-10 -left-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-10 -right-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/3 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <section className="section-container bg-transparent relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        
        <h2 className="section-heading relative z-10">JavaScript Art Gallery</h2>
        <p className="text-gray-300 max-w-3xl mb-12 relative z-10 animate-fade-in">
          Explore interactive JavaScript art pieces that combine creative coding with visual elements.
          Each piece demonstrates different techniques and approaches to creating art with code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="cyber-card overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Layers className="mr-2 h-5 w-5 text-cyber-accent" />
                Random Triangles
              </h3>
              <p className="text-gray-300 mb-6">
                An interactive visualization that creates randomly colored and positioned triangles that 
                rotate and transform based on user input.
              </p>
              <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                <iframe 
                  src="/RNDM.html" 
                  title="Random Triangles Artwork" 
                  className="w-full h-full border-0"
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-cyber-accent" />
                Random Cubes
              </h3>
              <p className="text-gray-300 mb-6">
                A generative art piece that creates a colorful arrangement of 3D cubes in an isometric grid,
                with each cube having unique properties.
              </p>
              <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                <iframe 
                  src="/rr.html" 
                  title="Random Cubes Artwork" 
                  className="w-full h-full border-0"
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <MousePointer className="mr-2 h-5 w-5 text-cyber-accent" />
                Interactive Butterfly Animation
              </h3>
              <p className="text-gray-300 mb-6">
                A dynamic animation featuring butterflies that follow mouse movement, combined with 
                abstract shapes and patterns created with code.
              </p>
              <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                <iframe 
                  src="/fye.html" 
                  title="Butterfly Animation" 
                  className="w-full h-full border-0"
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Layers className="mr-2 h-5 w-5 text-cyber-accent" />
                Kwam's Flower
              </h3>
              <p className="text-gray-300 mb-6">
                A mesmerizing 3D flower visualization created with parametric equations and creative
                coding techniques that rotates and transforms in 3D space.
              </p>
              <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                <iframe 
                  src="/RNDM2.html" 
                  title="Kwam's Flower" 
                  className="w-full h-full border-0"
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-cyber-accent" />
                Fireworks Display
              </h3>
              <p className="text-gray-300 mb-6">
                An interactive fireworks simulation that responds to user clicks, creating colorful
                explosions against a night sky backdrop with houses and clouds.
              </p>
              <div className="aspect-square w-full bg-cyber-dark relative rounded-md border border-cyber-accent/30 overflow-hidden">
                <iframe 
                  src="/fl.html" 
                  title="Fireworks Display" 
                  className="w-full h-full border-0"
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
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
