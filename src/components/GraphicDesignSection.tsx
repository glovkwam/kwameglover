
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Images } from 'lucide-react';

interface DesignProject {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

const GraphicDesignSection = () => {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  
  // Sample data - replace with your actual design projects
  const designProjects: DesignProject[] = [
    {
      id: 1,
      title: "Cybersecurity Infographic",
      image: "https://source.unsplash.com/random/800x600?infographic",
      category: "Infographic",
      description: "An infographic explaining basic cybersecurity principles for beginners."
    },
    {
      id: 2,
      title: "Digital Identity Branding",
      image: "https://source.unsplash.com/random/800x600?branding",
      category: "Branding",
      description: "A complete branding package for a digital security startup."
    },
    {
      id: 3,
      title: "Tech Conference Poster",
      image: "https://source.unsplash.com/random/800x600?poster",
      category: "Print",
      description: "Poster design for a cloud computing conference featuring futuristic elements."
    },
    {
      id: 4,
      title: "UI/UX for Security App",
      image: "https://source.unsplash.com/random/800x600?ui+design",
      category: "UI/UX",
      description: "User interface design for a mobile application focused on personal cybersecurity."
    }
  ];
  
  return (
    <section id="design" className="section-container bg-gradient-to-b from-cyber-dark to-cyber-light">
      <h2 className="section-heading">Graphic Design</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Creative visual solutions that communicate complex technological concepts through clean, futuristic design.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designProjects.map((project) => (
          <Card 
            key={project.id} 
            className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-cyber-accent/80 text-cyber-dark px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <Images className="h-5 w-5 mr-2 text-cyber-accent" />
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-cyber-light p-6 rounded-lg">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 right-0 text-white hover:text-cyber-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <div>
                <span className="inline-block bg-cyber-accent/80 text-cyber-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="font-semibold text-cyber-accent">Tools Used:</span> Adobe Photoshop, Illustrator, Figma
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-cyber-accent">Project Duration:</span> 2 weeks
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-cyber-accent">Client:</span> Personal Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignSection;
