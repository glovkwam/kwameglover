
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Code, MousePointer, Layers, Sparkles, Flower } from 'lucide-react';

const JavaScriptArt = () => {
  useEffect(() => {
    document.title = "JavaScript Art | Digital Artist Portfolio";
  }, []);

  const artworks = [
    {
      title: "3D Flower",
      description: "A stunning 3D flower visualization created with p5.js in WEBGL mode. Features intricate mathematical curves and parametric equations to generate organic, flowing petals with dynamic color gradients and 3D transformations.",
      file: "https://gainful-shocking-chard.glitch.me/",
      icon: Flower,
      color: "from-pink-500 to-rose-500",
      isExternal: true
    },
    {
      title: "Random Triangles",
      description: "An interactive visualization that creates randomly colored and positioned triangles that rotate and transform based on user input. Click to change background colors and watch the geometric patterns evolve.",
      file: "RNDM.html",
      icon: Layers,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Random Cubes", 
      description: "A generative art piece that creates a colorful arrangement of 3D cubes in an isometric grid, with each cube having unique properties and colors that shift dynamically.",
      file: "rr.html",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interactive Butterfly Animation",
      description: "A dynamic animation featuring butterflies that follow mouse movement, combined with abstract shapes and sound-reactive patterns created with p5.js and Web Audio API.",
      file: "fye.html",
      icon: MousePointer,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Fireworks Display",
      description: "An interactive fireworks simulation that responds to user clicks, creating colorful explosions against a night sky backdrop with houses, clouds, and animated celestial elements.",
      file: "fl.html",
      icon: Sparkles,
      color: "from-orange-500 to-red-500"
    }
  ];

  const createIframeMarkup = (file: string, title: string, isExternal: boolean = false) => {
    const src = isExternal ? file : `/${file}`;
    return {
      __html: `<iframe 
        src="${src}"
        title="${title}"
        style="width: 100%; height: 100%; border: none; display: block;"
        allowfullscreen
        loading="lazy">
      </iframe>`
    };
  };

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
          Each piece demonstrates different techniques and approaches to creating art with code using p5.js.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {artworks.map((artwork, index) => {
            const IconComponent = artwork.icon;
            return (
              <Card key={index} className="cyber-card overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${artwork.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <IconComponent className="mr-3 h-6 w-6 text-cyber-accent" />
                      {artwork.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {artwork.description}
                    </p>
                  </div>
                  
                  <div className="aspect-square w-full bg-cyber-dark relative border-t border-cyber-accent/30 overflow-hidden">
                    <div 
                      dangerouslySetInnerHTML={createIframeMarkup(artwork.file, artwork.title, artwork.isExternal)}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-4 bg-cyber-light/5 border-t border-cyber-accent/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center">
                        <Code className="mr-1 h-3 w-3" />
                        Built with p5.js
                      </span>
                      <span className="text-xs bg-cyber-accent/20 text-cyber-accent px-2 py-1 rounded-full">
                        {artwork.isExternal ? '3D WEBGL' : 'Interactive'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-cyber-light/10 rounded-lg p-8 border border-cyber-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/10 rounded-full blur-2xl"></div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Code className="mr-3 h-6 w-6 text-cyber-accent" />
            About JavaScript Art & Creative Coding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4">
                These interactive art pieces were created using p5.js, a JavaScript library designed for creative coding.
                Each piece explores different aspects of generative art, from geometric patterns to particle systems and 
                interactive experiences that respond to user input.
              </p>
            </div>
            <div>
              <p className="text-gray-300">
                Interact with the pieces by moving your mouse, clicking, or just watching the animations unfold.
                The code behind these works demonstrates principles of creative programming, mathematics, physics simulation,
                and interactive design that bridge the gap between art and technology.
              </p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-cyber-dark/30 rounded-lg">
              <div className="text-2xl font-bold text-cyber-accent">4</div>
              <div className="text-xs text-gray-400">Art Pieces</div>
            </div>
            <div className="text-center p-3 bg-cyber-dark/30 rounded-lg">
              <div className="text-2xl font-bold text-cyber-accent">p5.js</div>
              <div className="text-xs text-gray-400">Framework</div>
            </div>
            <div className="text-center p-3 bg-cyber-dark/30 rounded-lg">
              <div className="text-2xl font-bold text-cyber-accent">Interactive</div>
              <div className="text-xs text-gray-400">Experience</div>
            </div>
            <div className="text-center p-3 bg-cyber-dark/30 rounded-lg">
              <div className="text-2xl font-bold text-cyber-accent">Creative</div>
              <div className="text-xs text-gray-400">Coding</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JavaScriptArt;
