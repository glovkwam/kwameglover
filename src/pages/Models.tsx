
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines, ExternalLink, Play } from 'lucide-react';

const Models = () => {
  useEffect(() => {
    document.title = "3D Models & MaxMSP | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Interactive <span className="text-cyber-accent">3D Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
            A collection of 3D models and interactive media projects created using Blender, MaxMSP, 
            Cinema 4D, and Adobe Creative Suite. These projects showcase the intersection of visual art, 
            sound design, and interactive technology.
          </p>
        </div>

        {/* Wonderland Project */}
        <div className="mb-20">
          <Card className="bg-cyber-light/50 border border-cyber-accent/20 overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Wonderland Project</h2>
                <a 
                  href="https://sjsu-cadre-classes.github.io/SJSU_Art_101_F22_02/Groups/Kwame_Zuka_James_zak/wonderlandproject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-accent to-cyber-purple text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                An interactive 3D experience exploring creative digital environments and immersive storytelling.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              
              <div className="relative mb-8">
                <div className="aspect-[21/9] bg-black rounded-xl overflow-hidden border border-cyber-accent/30 shadow-2xl">
                  <iframe 
                    src="https://sjsu-cadre-classes.github.io/SJSU_Art_101_F22_02/Groups/Kwame_Zuka_James_zak/wonderlandproject/" 
                    frameBorder="0" 
                    scrolling="yes" 
                    width="100%" 
                    height="100%" 
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-md">
                    <span className="text-white text-sm font-medium">VR</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/6d93f144-a37f-4492-a79d-c93ff5b3128b.png" 
                  alt="Wonderland Project VR Scene" 
                  className="rounded-xl border border-cyber-accent/30 max-h-96 object-contain shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Room Blend */}
        <div className="mb-20">
          <Card className="bg-cyber-light/50 border border-cyber-accent/20 overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">My Room Blend</h2>
                <a 
                  href="https://myroomblend.glitch.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-accent to-cyber-purple text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                An interactive 3D room environment with custom design elements and interactive features.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              
              <div className="relative mb-8">
                <div className="aspect-[21/9] bg-black rounded-xl overflow-hidden border border-cyber-accent/30 shadow-2xl">
                  <iframe 
                    src="https://myroomblend.glitch.me/" 
                    frameBorder="0" 
                    scrolling="yes" 
                    width="100%" 
                    height="100%" 
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/78052504-c04d-456f-85f3-915f567094fe.png" 
                  alt="My Room Blend 3D Environment" 
                  className="rounded-xl border border-cyber-accent/30 max-h-96 object-contain shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VR Project */}
        <div className="mb-20">
          <Card className="bg-cyber-light/50 border border-cyber-accent/20 overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">VR Project</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                A virtual reality exploration showcasing immersive design techniques and interactive elements.
                Created with Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f1e40aed-80c8-46d5-b76d-f4017f33d0d0.png" 
                  alt="VR Project" 
                  className="rounded-xl border border-cyber-accent/30 max-h-96 object-contain shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MaxMSP Audio-Visual Project */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-white">
            MaxMSP <span className="text-cyber-accent">Audio-Visual Project</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-cyber-light/50 border border-cyber-accent/20 h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AudioLines className="h-8 w-8 text-cyber-accent" />
                    <h3 className="text-2xl font-bold text-white">Sound Wave Visualizer</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    An interactive audio-visual experience created with MaxMSP and JavaScript, bridging the gap between sound and visual art.
                    This project combines MaxMSP's audio processing capabilities with custom JavaScript visualizations to create 
                    dynamic patterns that respond to sound input.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-cyber-accent mb-4">Tools Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {['MaxMSP', 'JavaScript', 'WebGL', 'Adobe After Effects', 'Ableton Live'].map((tool) => (
                        <span key={tool} className="bg-cyber-accent/20 text-cyber-accent px-4 py-2 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyber-accent mb-4">Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0"></span>
                        Real-time audio analysis using MaxMSP
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0"></span>
                        Custom JavaScript shader rendering
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0"></span>
                        User interaction via webcam motion tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 flex-shrink-0"></span>
                        Dynamic color mapping based on audio frequencies
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-cyber-accent/30 shadow-2xl group">
                <img 
                  src="/kg.gif" 
                  alt="MaxMSP Audio-Visual Project"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyber-accent/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyber-purple/10 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Models;
