import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import MapSection from './MapSection';

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
                <CardTitle className="text-cyber-accent">Computer Science</CardTitle>
                <p className="text-sm text-gray-400">University of Technology, 2018 - 2022</p>
              </CardHeader>
              <CardContent>
                <p>Bachelor's degree with focus on cybersecurity, software development, and data structures. 
                Graduated with honors and completed a capstone project on secure web application development.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-cyber-dark border border-cyber-accent/30 shadow-lg hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyber-accent">Digital Arts Certificate</CardTitle>
                <p className="text-sm text-gray-400">Creative Arts Academy, 2020 - 2021</p>
              </CardHeader>
              <CardContent>
                <p>Specialized training in digital illustration, 3D modeling, and interactive media design.
                Received award for outstanding digital portfolio.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-cyber-dark border border-cyber-accent/30 shadow-lg hover-glow transition-all duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-cyber-accent">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  <li>AWS Certified Cloud Practitioner (2023)</li>
                  <li>CompTIA Security+ (2022)</li>
                  <li>Certified Ethical Hacker (CEH) (2023)</li>
                  <li>Unity Game Development Certification (2021)</li>
                </ul>
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

        {/* Map Section */}
        <MapSection />
      </div>
    </div>
  );
};

export default AboutSection;
