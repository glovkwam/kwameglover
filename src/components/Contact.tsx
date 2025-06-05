
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, Globe, Youtube } from 'lucide-react';

const Contact = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-container bg-cyber-dark">
      <div className="max-w-4xl mx-auto">
        <Card className="cyber-card h-full">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Connect With Me</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">Email</h5>
                  <a 
                    href="mailto:gloverkwame@gmail.com" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    gloverkwame@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">Play Game</h5>
                  <a 
                    href="https://glovkwam.github.io/Nanotech-Warrior/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    glovkwam.github.io/Nanotech-Warrior/
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Github className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">GitHub</h5>
                  <a 
                    href="https://github.com/glovkwam/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    github.com/glovkwam/
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">LinkedIn</h5>
                  <a 
                    href="https://www.linkedin.com/in/kwameglover/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    linkedin.com/in/kwameglover/
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Youtube className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">YouTube</h5>
                  <a 
                    href="https://www.youtube.com/@KwameGlover" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    youtube.com/@KwameGlover
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Code className="h-6 w-6 text-cyber-accent" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium mb-1">p5.js Editor</h5>
                  <a 
                    href="https://editor.p5js.org/kwamglov/collections/oDL_aMlVd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-cyber-accent transition-colors text-sm"
                  >
                    editor.p5js.org/kwamglov/collections/oDL_aMlVd
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-cyber-accent/5 p-6 rounded-lg border border-cyber-accent/20">
              <h4 className="text-white font-medium mb-4">Interested in working together?</h4>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance work, collaborations, or discussing opportunities in cybersecurity and cloud computing.
              </p>
              <Button 
                variant="outline" 
                className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 cursor-pointer"
                onClick={() => handleLinkClick('https://www.linkedin.com/in/kwameglover/')}
              >
                Message on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
