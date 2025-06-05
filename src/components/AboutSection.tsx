
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Palette, Brain, Globe, Zap, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Cybersecurity', icon: Shield, color: 'bg-red-500/20 text-red-400' },
    { name: 'Digital Art', icon: Palette, color: 'bg-purple-500/20 text-purple-400' },
    { name: 'JavaScript', icon: Code, color: 'bg-yellow-500/20 text-yellow-400' },
    { name: 'Cloud Computing', icon: Globe, color: 'bg-blue-500/20 text-blue-400' },
    { name: 'Machine Learning', icon: Brain, color: 'bg-green-500/20 text-green-400' },
    { name: 'Creative Coding', icon: Zap, color: 'bg-cyan-500/20 text-cyan-400' }
  ];

  return (
    <section id="about" className="section-container bg-transparent relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      
      <h2 className="section-heading relative z-10">About Me</h2>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="cyber-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Kwame Glover, a passionate digital artist and aspiring cybersecurity professional who finds 
                inspiration at the intersection of technology and creative expression. My YouTube videos focus on 
                artificial intelligence and technology, sharing insights about the latest developments in these 
                rapidly evolving fields.
              </p>
              <p>
                My artistic practice spans multiple mediums and technologies - from interactive JavaScript 
                visualizations and p5.js sketches to complex 3D modeling in Blender and Cinema 4D. I'm particularly 
                drawn to generative art, where algorithms and mathematical concepts create unexpected beauty, and 
                audio-visual projects that bridge the gap between sound and sight using tools like MaxMSP.
              </p>
              <p>
                Beyond my technical and artistic pursuits, I'm deeply passionate about sharing knowledge and 
                building community. Through my educational content, I strive to make complex concepts accessible 
                to others, whether it's explaining cybersecurity fundamentals or demonstrating creative coding 
                techniques.
              </p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Education & Certifications</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-cyber-accent/20 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-cyber-accent" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Bachelor of Fine Arts in Digital Media</h5>
                    <p className="text-gray-300 text-sm">San José State University • 2024</p>
                    <p className="text-gray-300 text-sm">Minor in General Business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-cyber-purple/20 p-2 rounded-full">
                    <Award className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">AWS Certifications (In Progress)</h5>
                    <p className="text-gray-300 text-sm">AWS Cloud Practitioner • Expected 2025</p>
                    <p className="text-gray-300 text-sm">AWS Solutions Architect • Expected 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className={`p-4 rounded-lg ${skill.color} border border-current/20 transform transition-all duration-300 hover:scale-105`}>
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-6">Current Focus</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-medium">Cybersecurity Studies</h5>
                    <p className="text-gray-300 text-sm">Advancing knowledge in network security, ethical hacking, and cloud infrastructure protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-medium">Creative Technology</h5>
                    <p className="text-gray-300 text-sm">Exploring AI-assisted art generation and interactive media installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-neon rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-medium">Open Source Contribution</h5>
                    <p className="text-gray-300 text-sm">Contributing to creative coding libraries and educational resources</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
