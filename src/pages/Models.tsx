
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelViewer from '@/components/ModelViewer';
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
      <div className="pt-20 animate-fade-in relative z-10">
        <section className="section-container bg-cyber-dark relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
          
          <h2 className="section-heading relative z-10">3D Models & Interactive Media</h2>
          <p className="text-gray-300 max-w-3xl mb-12 relative z-10 animate-fade-in">
            A collection of 3D models and interactive media projects created using Blender, MaxMSP, 
            Cinema 4D, and Adobe Creative Suite. These projects showcase the intersection of visual art, 
            sound design, and interactive technology.
          </p>
          
          <ModelViewer />
          
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
                  <img 
                    src="https://source.unsplash.com/random/800x450?audio+visualizer" 
                    alt="MaxMSP Project" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-cyber-accent/90 hover:bg-cyber-accent text-cyber-dark transition-colors duration-300 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Models;
