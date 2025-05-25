
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines, FileCode, Cuboid } from 'lucide-react';

const Models = () => {
  useEffect(() => {
    document.title = "3D Models & MaxMSP | Digital Artist Portfolio";
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
        
        <h2 className="section-heading relative z-10">Interactive 3D Projects</h2>
        <p className="text-gray-300 max-w-3xl mb-12 relative z-10 animate-fade-in">
          A collection of 3D models and interactive media projects created using Blender, MaxMSP, 
          Cinema 4D, and Adobe Creative Suite. These projects showcase the intersection of visual art, 
          sound design, and interactive technology.
        </p>
        
        <div className="grid grid-cols-1 gap-12 relative z-10 mb-12">
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Wonderland Project</h3>
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
              <h3 className="text-2xl font-bold text-white mb-4">My Room Blend</h3>
              <p className="text-gray-300 mb-6">
                An interactive 3D room environment with custom design elements and interactive features.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="https://myroomblend.glitch.me/" 
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
                  alt="My Room Blend" 
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
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
                <video 
                  src="/kg.mp4" 
                  controls
                  className="w-full h-full object-cover"
                  poster="https://source.unsplash.com/random/800x450?audio+visualizer"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Models;
