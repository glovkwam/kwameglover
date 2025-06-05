
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines, FileCode, Cuboid, ExternalLink } from 'lucide-react';

const Models = () => {
  useEffect(() => {
    document.title = "3D Models & MaxMSP | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Flickering background grid decoration */}
      <div className="absolute inset-0 flickering-grid"></div>
      
      {/* Animated background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="relative z-10">
        <Navbar />
        <section className="section-container bg-transparent relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        
        <h2 className="section-heading relative z-10">Interactive 3D Projects</h2>
        <p className="text-gray-300 max-w-3xl mb-12 relative z-10 animate-fade-in">
          A collection of 3D models and interactive media projects created using Blender, MaxMSP, 
          Cinema 4D, and Adobe Creative Suite. These projects showcase the intersection of visual art, 
          sound design, and interactive technology.
        </p>
        
        <div className="grid grid-cols-1 gap-12 relative z-10 mb-12">
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Wonderland Project</h3>
                <a 
                  href="https://sjsu-cadre-classes.github.io/SJSU_Art_101_F22_02/Groups/Kwame_Zuka_James_zak/wonderlandproject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark rounded-md transition-colors font-medium"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-300 mb-6">
                An interactive 3D experience exploring creative digital environments and immersive storytelling.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="https://sjsu-cadre-classes.github.io/SJSU_Art_101_F22_02/Groups/Kwame_Zuka_James_zak/wonderlandproject/" 
                  frameBorder="0" 
                  scrolling="yes" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-6">
                <img 
                  src="https://cdn.glitch.global/93c093d6-9c56-4aeb-8bee-ed8806236dd4/VR.JPEG?v=1668817067984" 
                  alt="Wonderland Project" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain mx-auto"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">3D Room Environment</h3>
                <a 
                  href="https://glovkwam.github.io/3DRoom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark rounded-md transition-colors font-medium"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-300 mb-6">
                An interactive 3D room environment with custom design elements and interactive features.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="https://glovkwam.github.io/3DRoom/" 
                  frameBorder="0" 
                  scrolling="yes" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/1188abf2-1e5e-44d2-baa4-888c4a383c40.png" 
                  alt="3D Room Environment" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain mx-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">VR Project</h3>
              <p className="text-gray-300 mb-6">
                A virtual reality exploration showcasing immersive design techniques and interactive elements.
                Created with Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f1e40aed-80c8-46d5-b76d-f4017f33d0d0.png" 
                  alt="VR Project" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h2 className="section-heading relative z-10">MaxMSP Audio-Visual Project</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mb-20">
            <div>
              <Card className="cyber-card h-full transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AudioLines className="h-6 w-6 mr-2 text-cyber-accent" />
                    Sound Wave Visualizer
                  </h3>
                  <p className="text-gray-300 mb-6">
                    An interactive audio-visual experience created with MaxMSP and JavaScript, bridging the gap between sound and visual art.
                    This project combines MaxMSP's audio processing capabilities with custom JavaScript visualizations to create 
                    dynamic patterns that respond to sound input.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-accent mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">MaxMSP</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">WebGL</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">Adobe After Effects</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">Ableton Live</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-accent mb-2">Features</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Real-time audio analysis using MaxMSP</li>
                        <li>Custom JavaScript shader rendering</li>
                        <li>User interaction via webcam motion tracking</li>
                        <li>Dynamic color mapping based on audio frequencies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative group">
              <div className="relative aspect-video bg-cyber-light rounded-lg overflow-hidden border border-cyber-accent/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]">
                <img 
                  src="/kg.gif" 
                  alt="MaxMSP Audio-Visual Project"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">3D Flower Animation</h3>
                <a 
                  href="/flower.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark rounded-md transition-colors font-medium"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </a>
              </div>
              <p className="text-gray-300 mb-6">
                An interactive 3D flower animation created with p5.js and WebGL. Features parametric equations 
                for petal generation, dynamic coloring, and 3D orbital controls for immersive viewing.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="/flower.html" 
                  frameBorder="0" 
                  scrolling="no" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
        <Footer />
      </div>
    </div>
  );
};

export default Models;
