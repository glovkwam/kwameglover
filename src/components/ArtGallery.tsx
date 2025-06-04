
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Code, Palette } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import CMSButton from '@/components/ui/cms-button';

const ArtGallery = () => {
  const { openCMS } = useCMS();

  return (
    <section id="art" className="section-container bg-cyber-light relative overflow-hidden">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h2 className="section-heading">JavaScript Art Gallery</h2>
          <p className="text-gray-300 max-w-2xl">
            Interactive digital art created with JavaScript, p5.js, and creative coding techniques.
            Each piece explores different aspects of generative art and interactive experiences.
          </p>
        </div>
        <CMSButton section="art" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">RNDM</h3>
            </div>
            
            <div className="game-responsive-narrow mb-4">
              <iframe 
                src="/RNDM.html" 
                title="RNDM JavaScript Art"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              A generative art piece that creates random patterns and colors, 
              exploring the beauty of controlled chaos in digital art.
            </p>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="cyber-button text-xs"
              >
                <a href="/RNDM.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Open Full
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Play className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">FYE</h3>
            </div>
            
            <div className="game-responsive-narrow mb-4">
              <iframe 
                src="/fye.html" 
                title="FYE JavaScript Art"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              An interactive visual experience that responds to user input, 
              creating dynamic animations and visual effects.
            </p>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="cyber-button text-xs"
              >
                <a href="/fye.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Open Full
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">RR</h3>
            </div>
            
            <div className="game-responsive-narrow mb-4">
              <iframe 
                src="/rr.html" 
                title="RR JavaScript Art"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              A rhythmic and recursive art piece that explores mathematical patterns 
              and their visual representations through code.
            </p>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="cyber-button text-xs"
              >
                <a href="/rr.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Open Full
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">RNDM2</h3>
            </div>
            
            <div className="game-responsive-narrow mb-4">
              <iframe 
                src="/RNDM2.html" 
                title="RNDM2 JavaScript Art"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              An evolution of the original RNDM concept, featuring enhanced 
              randomization algorithms and more complex visual patterns.
            </p>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="cyber-button text-xs"
              >
                <a href="/RNDM2.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Open Full
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Play className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">Fireworks</h3>
            </div>
            
            <div className="game-responsive-narrow mb-4">
              <iframe 
                src="/Fireworks.html" 
                title="Fireworks JavaScript Art"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-gray-300 text-sm mb-4">
              An interactive fireworks simulation featuring particle systems, 
              realistic physics, and a cityscape background with dynamic elements.
            </p>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="cyber-button text-xs"
              >
                <a href="/Fireworks.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Open Full
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-16 text-center relative z-10">
        <p className="text-gray-300 mb-6">
          All projects are built with p5.js and showcase different aspects of creative coding, 
          from generative patterns to interactive simulations.
        </p>
        <Button 
          variant="outline" 
          className="cyber-button"
          asChild
        >
          <a href="https://github.com/glovkwam" target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-5 w-5" />
            View Source Code
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ArtGallery;
