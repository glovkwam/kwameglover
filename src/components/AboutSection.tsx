
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

  const portfolioLinks = [
    {
      title: 'Webflow Portfolio',
      description: 'Professional web design showcase built with Webflow',
      external: true
    },
    {
      title: 'GitHub Portfolio',
      description: 'Custom portfolio website hosted on GitHub Pages',
      external: true
    },
    {
      title: 'Creative Portfolio',
      description: 'Creative work portfolio showcasing diverse design projects',
      external: true
    }
  ];

  return (
    <section id="about" className="section-container bg-transparent relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      
      <h2 className="section-heading relative z-10">About Me</h2>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        {/* Bio Section */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Bio</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Kwame Glover, a passionate digital artist and aspiring cybersecurity professional who creates 
                YouTube videos about artificial intelligence and technology. I received my BFA in Digital Media 
                from San José State University in 2024 with a minor in General Business, and I'm currently 
                learning cybersecurity and cloud computing, earning my AWS Cloud Practitioner and AWS Solutions 
                Architect certifications in 2025.
              </p>
              <p>
                My technical interests span from creative coding with JavaScript and p5.js to working with 
                microcontrollers and exploring machine learning applications. I'm particularly interested in 
                working as a machine learning engineer, combining my artistic background with cutting-edge AI 
                technology to create innovative solutions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Web Design Portfolio */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Web Design Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {portfolioLinks.map((portfolio, index) => (
                <div key={index} className="bg-cyber-light/50 p-4 rounded-lg border border-cyber-accent/20 hover:border-cyber-accent/40 transition-all duration-300">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    {portfolio.title}
                    {portfolio.external && <span className="text-cyber-accent text-sm">↗</span>}
                  </h4>
                  <p className="text-gray-300 text-sm">{portfolio.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-cyber-accent" />
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bachelor's Degree */}
              <div className="bg-cyber-light/50 p-6 rounded-lg border border-cyber-accent/20">
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Fine Arts in Digital Media Arts</h4>
                <p className="text-cyber-accent font-medium mb-4">San José State University</p>
                <p className="text-gray-300 text-sm mb-4">
                  Focus on web design, video game design, 3D modeling, animation, 
                  illustration, and programming. Completed capstone in game 
                  development and received minor in general business.
                </p>
                <div className="space-y-2">
                  <h5 className="text-white font-medium">Specializations:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Web Design</li>
                    <li>• Video Game Design</li>
                    <li>• 3D Modeling & Animation</li>
                    <li>• Digital Illustration</li>
                    <li>• Programming</li>
                  </ul>
                </div>
              </div>

              {/* NPower Program */}
              <div className="bg-cyber-light/50 p-6 rounded-lg border border-cyber-purple/20">
                <h4 className="text-xl font-bold text-white mb-2">NPower IT/Cybersecurity Program</h4>
                <p className="text-cyber-purple font-medium mb-4">Professional Certification Program</p>
                <p className="text-gray-300 text-sm mb-4">
                  Specialized training in IT cybersecurity, cloud security, and cloud 
                  computing with industry-recognized certifications.
                </p>
                <div className="space-y-2">
                  <h5 className="text-white font-medium">Focus Areas:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• IT Cybersecurity</li>
                    <li>• Cloud Security</li>
                    <li>• Cloud Computing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Certifications */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Certifications</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-3">Cloud & Azure</h4>
                <div className="bg-cyber-accent/10 p-3 rounded-lg border border-cyber-accent/20">
                  <p className="text-gray-300 text-sm">Microsoft Azure Fundamentals (AZ-900)</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">Google Certifications</h4>
                <div className="space-y-2">
                  <div className="bg-cyber-purple/10 p-3 rounded-lg border border-cyber-purple/20">
                    <p className="text-gray-300 text-sm">Google IT Support Specialist</p>
                  </div>
                  <div className="bg-cyber-purple/10 p-3 rounded-lg border border-cyber-purple/20">
                    <p className="text-gray-300 text-sm">Google: IT Automation with Python</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">CompTIA</h4>
                <div className="bg-cyber-neon/10 p-3 rounded-lg border border-cyber-neon/20">
                  <p className="text-gray-300 text-sm">CompTIA Tech+</p>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3">AWS Certifications (In Progress)</h4>
                <div className="space-y-2">
                  <div className="bg-cyber-accent/10 p-3 rounded-lg border border-cyber-accent/20">
                    <p className="text-gray-300 text-sm">AWS Cloud Practitioner • Expected 2025</p>
                  </div>
                  <div className="bg-cyber-accent/10 p-3 rounded-lg border border-cyber-accent/20">
                    <p className="text-gray-300 text-sm">AWS Solutions Architect • Expected 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Expertise */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
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
          </CardContent>
        </Card>

        {/* Current Focus */}
        <Card className="cyber-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Current Focus</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Cybersecurity Studies</h4>
                  <p className="text-gray-300 text-sm">Advancing knowledge in network security, ethical hacking, and cloud infrastructure protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Creative Technology</h4>
                  <p className="text-gray-300 text-sm">Exploring AI-assisted art generation and interactive media installations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyber-neon rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-medium">Open Source Contribution</h4>
                  <p className="text-gray-300 text-sm">Contributing to creative coding libraries and educational resources</p>
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
