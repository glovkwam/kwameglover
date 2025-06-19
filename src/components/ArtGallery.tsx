
import React, { useState, useEffect } from 'react';

// Simple Card Components (if you don't have shadcn/ui)
const Card = ({ children, className, onClick }) => (
  <div className={`rounded-lg shadow-lg ${className}`} onClick={onClick}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// Simple Dialog Components
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-10 max-h-[90vh] overflow-auto">
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className }) => (
  <div className={`relative rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

// Icons
const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArtGallery = () => {
  // Your actual art pieces based on what I can see in your file structure
  const artPieces = [
    {
      id: 1,
      title: "Fireworks Animation",
      filename: "Fireworks.html",
      description: "An interactive fireworks display with particle effects, gravity simulation, and dynamic explosions triggered by mouse clicks.",
      category: "Animation",
      tech: ["p5.js", "Particle Systems", "Physics"]
    },
    {
      id: 2,
      title: "Interactive Art Experiment",
      filename: "fye.html", 
      description: "An elegant butterfly animation with interactive elements such as sound reactivity using microphone input and smooth flight patterns.",
      category: "Experimental",
      tech: ["Mouse Events", "Color Theory", "Algorithms"]
    },
    {
      id: 3,
      title: "Random Number Display Machine",
      filename: "RNDM.html",
      description: "An interactive random number generator with dynamic visual display and real-time animations.",
      category: "Interactive",
      tech: ["Canvas API", "JavaScript", "CSS3"]
    },
    {
      id: 4,
      title: "Rainbow Art Generator", 
      filename: "rr.html",
      description: "A colorful art generator that creates rainbow-inspired visual compositions with mathematical precision.",
      category: "Generative",
      tech: ["HSL Colors", "Trigonometry", "Fractals"]
    },
    {
      id: 5,
      title: "3D Flower Animation",
      filename: "flower.html",
      description: "An interactive 3D flower animation created with p5.js and WebGL. Features parametric equations for petal generation, dynamic coloring, and 3D orbital controls for immersive viewing.",
      category: "3D",
      tech: ["p5.js", "WebGL", "3D Math"]
    }
  ];
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);
  const [availableArt, setAvailableArt] = useState([]);
  
  // Check which files are actually available
  useEffect(() => {
    const checkAvailability = async () => {
      const available = [];
      for (const art of artPieces) {
        // If it's an external URL, just add it
        if (art.filename.startsWith('http')) {
          available.push(art);
          continue;
        }
        try {
          const response = await fetch(`/${art.filename}`, { method: 'HEAD' });
          if (response.ok) {
            available.push(art);
          }
        } catch (error) {
          console.log(`File not available: ${art.filename}`);
        }
      }
      setAvailableArt(available);
    };

    checkAvailability();
  }, []);
  
  const handleArtClick = (art) => {
    console.log('Clicked:', art);
    setSelectedArt(art);
    setIsDialogOpen(true);
  };

  const openInNewTab = (filename) => {
    window.open(`/${filename}`, '_blank');
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedArt(null);
  };
  
  return (
    <section id="art" className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-light to-cyber-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyber-accent to-purple-400 bg-clip-text text-transparent mb-6">
            JavaScript Art Gallery
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Interactive art pieces built with pure JavaScript, showcasing creative coding, algorithmic design, and dynamic visualizations.
          </p>
          <div className="mt-8 text-cyber-accent">
            {availableArt.length} interactive pieces available
          </div>
        </div>
        
        {/* Loading State */}
        {availableArt.length === 0 && (
          <div className="text-center py-16">
            <div className="animate-spin w-12 h-12 border-2 border-cyber-accent border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Loading art pieces...</p>
          </div>
        )}
        
        {/* Gallery Grid */}
        {availableArt.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {availableArt.map((art) => (
              <Card 
                key={art.id} 
                className="group bg-cyber-light/50 backdrop-blur-sm border border-cyber-accent/20 hover:border-cyber-accent/50 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-cyber-accent/25"
                onClick={() => handleArtClick(art)}
              >
                <CardContent className="p-0">
                  {/* Live Preview Container */}
                  <div className="h-48 overflow-hidden relative bg-cyber-dark">
                    {/* Live iframe preview */}
                    <iframe
                      src={art.filename.startsWith('http') ? art.filename : `/${art.filename}`}
                      className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left"
                      title={`${art.title} Preview`}
                      style={{ 
                        width: '200%', 
                        height: '200%',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left'
                      }}
                      sandbox="allow-scripts allow-same-origin"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-cyber-accent to-purple-600 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                      {art.category}
                    </div>
                    
                    {/* Code Icon */}
                    <div className="absolute bottom-3 right-3 bg-cyber-accent/90 backdrop-blur-sm p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    
                    {/* Live Indicator */}
                    <div className="absolute bottom-3 left-3 bg-green-500/90 px-2 py-1 rounded text-xs font-bold text-white">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyber-accent group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {art.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {art.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {art.tech.slice(0, 2).map((tech, index) => (
                        <span key={index} className="text-xs bg-cyber-dark/50 text-cyber-accent px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {art.tech.length > 2 && (
                        <span className="text-xs text-gray-400">+{art.tech.length - 2}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyber-accent font-mono bg-cyber-dark/50 px-2 py-1 rounded">
                        {art.filename}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-cyber-accent transition-colors duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Click on any art piece to view it in full detail, or open it in a new tab for complete interaction.
          </p>
          <div className="inline-flex items-center space-x-2 text-cyber-accent">
            <Code className="h-5 w-5" />
            <span>Built with JavaScript, HTML5 Canvas, and Creative Vision</span>
          </div>
        </div>
      </div>
      
      {/* Modal Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="w-[95vw] max-w-6xl h-[90vh] bg-cyber-dark border border-cyber-accent/30 shadow-2xl">
          {selectedArt && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-cyber-accent/20">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyber-accent to-purple-400 bg-clip-text text-transparent mb-2">
                    {selectedArt.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-2">{selectedArt.description}</p>
                  <div className="flex items-center space-x-4 flex-wrap">
                    <span className="text-sm text-cyber-accent bg-cyber-light/30 px-2 py-1 rounded">
                      {selectedArt.category}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">
                      {selectedArt.filename}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <button 
                    onClick={() => openInNewTab(selectedArt.filename)}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyber-accent to-purple-600 hover:from-cyber-accent/80 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-300 shadow-lg text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Full Screen
                  </button>
                  <button 
                    onClick={closeDialog}
                    className="bg-cyber-light hover:bg-cyber-light/80 text-white p-2 rounded-lg transition-colors duration-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Iframe Container */}
              <div className="flex-1 min-h-0">
                <div className="w-full h-full bg-cyber-light rounded-lg overflow-hidden border border-cyber-accent/20 shadow-inner">
                  <iframe 
                    src={selectedArt.filename.startsWith('http') ? selectedArt.filename : `/${selectedArt.filename}`}
                    className="w-full h-full border-0"
                    title={selectedArt.title}
                    sandbox="allow-scripts allow-same-origin allow-pointer-lock"
                  />
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-cyber-accent/20">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Interactive JavaScript Art • Click and drag to interact</span>
                  <span>Press ESC or click outside to close</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ArtGallery;
