
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

const WebDesign = () => {
  useEffect(() => {
    document.title = "Web Design | Digital Artist Portfolio";
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
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Web <span className="text-cyber-accent">Design</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12 text-center mx-auto">
            Explore my web design portfolio featuring responsive websites, creative interfaces, and modern web experiences.
          </p>
          
          {/* Portfolio Links Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyber-accent">Live Portfolio Sites</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <a 
                href="https://kwames-awesome-site-671991.webflow.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  Pico W Light Show <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Professional web design showcase built with Webflow</p>
              </a>
              
              <a 
                href="https://glovkwam.github.io/Kwame-Portfolio-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  GitHub Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Custom portfolio website hosted on GitHub Pages</p>
              </a>
              
              <a 
                href="https://tallydabandz.myportfolio.com/work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  Creative Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Creative work portfolio showcasing diverse design projects</p>
              </a>

              <a 
                href="https://quest-for-security-mastery.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  Security Mastery <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Quest for cybersecurity mastery learning platform</p>
              </a>

              <a 
                href="https://jafasa.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  JAFASA Organization <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Jamaica Foundation for the Advancement of Sports & Arts website</p>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default WebDesign;
