
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Code, Globe } from 'lucide-react';

const Contact = () => {
  // This is a frontend-only form without actual backend submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! This is a demo form - in a real portfolio, this would send me an email.");
  };
  
  return (
    <section id="contact" className="section-container bg-cyber-dark">
      <h2 className="section-heading">Get In Touch</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Want to collaborate on a project or chat about digital art, game development, or cybersecurity? Reach out using the form below.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="cyber-card overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">Name</label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-cyber-dark border-cyber-accent/50 focus:border-cyber-accent text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-cyber-dark border-cyber-accent/50 focus:border-cyber-accent text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">Subject</label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="bg-cyber-dark border-cyber-accent/50 focus:border-cyber-accent text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-cyber-dark border-cyber-accent/50 focus:border-cyber-accent text-white resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark font-medium py-3"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div>
          <Card className="cyber-card h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-accent/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-cyber-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-gray-300 hover:text-cyber-accent transition-colors">
                      contact@example.com
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
                  <a href="#" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                    <Github className="h-5 w-5 text-cyber-accent" />
                  </a>
                  <a href="#" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                    <Linkedin className="h-5 w-5 text-cyber-accent" />
                  </a>
                  <a href="#" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
                    <Twitter className="h-5 w-5 text-cyber-accent" />
                  </a>
                  <a href="#" className="bg-cyber-accent/20 p-3 rounded-full hover:bg-cyber-accent/40 transition-colors">
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
      </div>
    </section>
  );
};

export default Contact;
