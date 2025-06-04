import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, Globe } from 'lucide-react';

const Contact = () => {
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
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:gloverkwame@gmail.com" className="text-gray-300 hover:text-cyber-accent transition-colors">
                    gloverkwame@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cyber-accent/20 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-cyber-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Website</h4>
                  <a href="https://www.example.com" className="text-gray-300 hover:text-cyber-accent transition-colors">
                    www.example.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/glovkwam/" target="_blank" rel="noopener noreferrer" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                  <Github className="h-5 w-5 text-cyber-accent" />
                </a>
                <a href="https://www.linkedin.com/in/kwameglover/" target="_blank" rel="noopener noreferrer" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                  <Linkedin className="h-5 w-5 text-cyber-accent" />
                </a>
                <a href="https://editor.p5js.org/kwamglov/sketches" target="_blank" rel="noopener noreferrer" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                  <Code className="h-5 w-5 text-cyber-accent" />
                </a>
              </div>
            </div>
            
            <div className="mt-12 bg-cyber-accent/5 p-6 rounded-lg border border-cyber-accent/20">
              <h4 className="text-white font-medium mb-4">Interested in working together?</h4>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance work, collaborations, or discussing opportunities in cybersecurity and cloud computing.
              </p>
              <Button variant="outline" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10">
                View My Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
