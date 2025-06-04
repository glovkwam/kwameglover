import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        About <span className="text-cyber-accent">Me</span>
      </h1>
      
      <div className="space-y-12">
        {/* Bio Section */}
        <section className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyber-accent">Bio</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg">
              I am a digital artist and aspiring cybersecurity professional with a passion for technology and creativity. 
              My journey through the digital landscape has allowed me to explore various forms of artistic expression while 
              developing technical skills in cybersecurity and cloud computing.
            </p>
            <p className="text-lg mt-4">
              When I'm not creating digital art, I enjoy exploring new technologies, contributing to open-source projects, 
              and expanding my knowledge in the ever-evolving field of cybersecurity.
            </p>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="animate-fade-in" id="education">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2 text-cyber-accent">
            <GraduationCap className="h-6 w-6" /> Education
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-cyber-dark border border-cyber-accent/30 shadow-lg hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyber-accent">Bachelor of Fine Arts in Digital Media Arts</CardTitle>
                <p className="text-sm text-gray-400">San José State University</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Focus on web design, video game design, 3D modeling, animation, illustration, and programming. 
                Completed capstone in game development and received minor in general business.</p>
                <div className="text-sm text-gray-300">
                  <strong>Specializations:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Web Design</li>
                    <li>Video Game Design</li>
                    <li>3D Modeling & Animation</li>
                    <li>Digital Illustration</li>
                    <li>Programming</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-cyber-dark border border-cyber-accent/30 shadow-lg hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyber-accent">NPower IT/Cybersecurity Program</CardTitle>
                <p className="text-sm text-gray-400">Professional Certification Program</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Specialized training in IT cybersecurity, cloud security, and cloud computing with industry-recognized certifications.</p>
                <div className="text-sm text-gray-300">
                  <strong>Focus Areas:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>IT Cybersecurity</li>
                    <li>Cloud Security</li>
                    <li>Cloud Computing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-cyber-dark border border-cyber-accent/30 shadow-lg hover-glow transition-all duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-cyber-accent">Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cloud & Azure</h4>
                    <ul className="space-y-1 list-disc pl-5 text-gray-300">
                      <li>Microsoft Azure Fundamentals (AZ-900)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Google Certifications</h4>
                    <ul className="space-y-1 list-disc pl-5 text-gray-300">
                      <li>Google IT Support Specialist</li>
                      <li>Google: IT Automation with Python</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">CompTIA</h4>
                    <ul className="space-y-1 list-disc pl-5 text-gray-300">
                      <li>CompTIA Tech+</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyber-accent">Skills</h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border border-cyber-accent/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Technical</h3>
              <p>JavaScript, Python, React, Node.js, AWS, Docker, Cybersecurity, Network Analysis</p>
            </div>
            
            <div className="p-4 border border-cyber-accent/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Creative</h3>
              <p>Digital Illustration, 3D Modeling, Animation, UI/UX Design, Game Development</p>
            </div>
            
            <div className="p-4 border border-cyber-accent/30 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Soft Skills</h3>
              <p>Project Management, Communication, Problem Solving, Critical Thinking, Teamwork</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
