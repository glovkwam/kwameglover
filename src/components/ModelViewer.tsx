
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Model {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
}

const ModelViewer = () => {
  // Sample model data - replace with your actual 3D model information
  const models: Model[] = [
    {
      id: 1,
      title: "Cybersecurity Concept",
      description: "3D model visualizing cybersecurity concepts, including a digital shield, lock mechanisms, and data protection visualization.",
      thumbnail: "https://source.unsplash.com/random/800x600?cybersecurity",
      images: [
        "https://source.unsplash.com/random/800x600?cybersecurity+1",
        "https://source.unsplash.com/random/800x600?cybersecurity+2",
        "https://source.unsplash.com/random/800x600?cybersecurity+3"
      ],
      technologies: ["Blender", "Substance Painter", "Arnold Renderer"]
    },
    {
      id: 2,
      title: "Cloud Computing Visualization",
      description: "A 3D visualization of cloud computing infrastructure, showing interconnected servers, data flows, and virtual machines.",
      thumbnail: "https://source.unsplash.com/random/800x600?cloud+computing",
      images: [
        "https://source.unsplash.com/random/800x600?cloud+1",
        "https://source.unsplash.com/random/800x600?cloud+2",
        "https://source.unsplash.com/random/800x600?cloud+3"
      ],
      technologies: ["Cinema 4D", "Octane Renderer", "After Effects"]
    },
    {
      id: 3,
      title: "Digital Art Character",
      description: "A futuristic character design for a video game, featuring cyberpunk aesthetics and advanced technology elements.",
      thumbnail: "https://source.unsplash.com/random/800x600?cyberpunk+character",
      images: [
        "https://source.unsplash.com/random/800x600?character+1",
        "https://source.unsplash.com/random/800x600?character+2",
        "https://source.unsplash.com/random/800x600?character+3"
      ],
      technologies: ["ZBrush", "Maya", "Marvelous Designer"]
    }
  ];
  
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  return (
    <section id="models" className="section-container bg-cyber-dark">
      <h2 className="section-heading">3D Models</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Explore my 3D modeling work, showcasing my technical skills and creative vision in three-dimensional space.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="space-y-4 sticky top-24">
            {models.map((model, index) => (
              <Card 
                key={model.id}
                onClick={() => { setSelectedModelIndex(index); setSelectedImageIndex(0); }}
                className={`cyber-card cursor-pointer transition-all duration-300 ${
                  selectedModelIndex === index ? 'border-cyber-accent' : 'border-cyber-accent/30'
                }`}
              >
                <CardContent className="p-4">
                  <div className="h-20 flex items-center">
                    <h3 className="text-white font-medium">{model.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-black relative overflow-hidden">
                <img 
                  src={models[selectedModelIndex].images[selectedImageIndex]} 
                  alt={models[selectedModelIndex].title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {models[selectedModelIndex].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{models[selectedModelIndex].title}</h3>
                <p className="text-gray-300">{models[selectedModelIndex].description}</p>
                
                <div className="mt-8">
                  <div className="grid grid-cols-3 gap-4">
                    {models[selectedModelIndex].images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index ? 'border-cyber-accent' : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`View ${index + 1}`} 
                          className="w-full h-24 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;
