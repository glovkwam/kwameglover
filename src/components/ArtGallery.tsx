
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Code } from 'lucide-react';

interface ArtPiece {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  codeSnippet: string;
}

const ArtGallery = () => {
  // Sample art pieces - replace with your actual JavaScript art pieces
  const artPieces: ArtPiece[] = [
    {
      id: 1,
      title: "Fractal Tree Generator",
      thumbnail: "https://source.unsplash.com/random/600x400?fractal",
      description: "An interactive JavaScript application that generates beautiful fractal trees with customizable parameters.",
      codeSnippet: "function drawTree(startX, startY, length, angle, branchWidth) {\n  context.beginPath();\n  context.save();\n  context.strokeStyle = 'rgba(0, 246, 255, ' + (0.8 - length/200) + ')';\n  context.lineWidth = branchWidth;\n  context.translate(startX, startY);\n  context.rotate(angle * Math.PI/180);\n  context.moveTo(0, 0);\n  context.lineTo(0, -length);\n  context.stroke();\n\n  if(length < 10) {\n    context.restore();\n    return;\n  }\n\n  drawTree(0, -length, length*0.8, angle-15, branchWidth*0.8);\n  drawTree(0, -length, length*0.8, angle+15, branchWidth*0.8);\n\n  context.restore();\n}"
    },
    {
      id: 2,
      title: "Particle System",
      thumbnail: "https://source.unsplash.com/random/600x400?particle",
      description: "A dynamic particle system that responds to mouse movements, creating fluid and organic animations.",
      codeSnippet: "class Particle {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.size = Math.random() * 5 + 1;\n    this.speedX = Math.random() * 3 - 1.5;\n    this.speedY = Math.random() * 3 - 1.5;\n    this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;\n  }\n\n  update() {\n    this.x += this.speedX;\n    this.y += this.speedY;\n    if (this.size > 0.2) this.size -= 0.1;\n  }\n\n  draw() {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\n    ctx.fill();\n  }\n}"
    },
    {
      id: 3,
      title: "Audio Visualizer",
      thumbnail: "https://source.unsplash.com/random/600x400?audio+wave",
      description: "A JavaScript audio visualizer that creates beautiful patterns and animations based on sound frequencies.",
      codeSnippet: "function setupAudioVisualizer() {\n  const audioContext = new (window.AudioContext || window.webkitAudioContext)();\n  const analyser = audioContext.createAnalyser();\n  analyser.fftSize = 2048;\n  \n  const bufferLength = analyser.frequencyBinCount;\n  const dataArray = new Uint8Array(bufferLength);\n  \n  function animate() {\n    requestAnimationFrame(animate);\n    analyser.getByteFrequencyData(dataArray);\n    \n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    \n    let barWidth = (canvas.width / bufferLength) * 2.5;\n    let barHeight;\n    let x = 0;\n    \n    for(let i = 0; i < bufferLength; i++) {\n      barHeight = dataArray[i] * 2;\n      \n      ctx.fillStyle = `hsl(${i * 360 / bufferLength}, 100%, 50%)`;\n      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);\n      \n      x += barWidth + 1;\n    }\n  }\n  \n  animate();\n}"
    },
    {
      id: 4,
      title: "Generative Art Algorithm",
      thumbnail: "https://source.unsplash.com/random/600x400?generative+art",
      description: "An algorithm that creates unique abstract compositions using randomized shapes and colors.",
      codeSnippet: "function generateComposition(width, height) {\n  const shapes = [];\n  const numShapes = Math.floor(Math.random() * 50) + 20;\n  \n  for(let i = 0; i < numShapes; i++) {\n    const shape = {\n      x: Math.random() * width,\n      y: Math.random() * height,\n      size: Math.random() * 100 + 10,\n      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.7 + 0.3})`,\n      type: ['circle', 'rect', 'triangle'][Math.floor(Math.random() * 3)]\n    };\n    shapes.push(shape);\n  }\n  \n  return shapes;\n}"
    },
    {
      id: 5,
      title: "Interactive Network Graph",
      thumbnail: "https://source.unsplash.com/random/600x400?network+graph",
      description: "A force-directed graph visualization showing interconnected nodes with interactive elements.",
      codeSnippet: "class NetworkGraph {\n  constructor(nodes, links) {\n    this.nodes = nodes;\n    this.links = links;\n    this.simulation = d3.forceSimulation(nodes)\n      .force('charge', d3.forceManyBody().strength(-100))\n      .force('center', d3.forceCenter(width / 2, height / 2))\n      .force('link', d3.forceLink(links).id(d => d.id).distance(100))\n      .on('tick', this.ticked.bind(this));\n  }\n  \n  ticked() {\n    svg.selectAll('.link')\n      .attr('x1', d => d.source.x)\n      .attr('y1', d => d.source.y)\n      .attr('x2', d => d.target.x)\n      .attr('y2', d => d.target.y);\n    \n    svg.selectAll('.node')\n      .attr('cx', d => d.x)\n      .attr('cy', d => d.y);\n  }\n}"
    }
  ];
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  
  const handleArtClick = (art: ArtPiece) => {
    setSelectedArt(art);
    setIsDialogOpen(true);
  };
  
  return (
    <section id="art" className="section-container bg-cyber-light">
      <h2 className="section-heading">JavaScript Art</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Interactive art pieces built with JavaScript, showcasing creative coding and algorithmic design.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artPieces.map((art) => (
          <Card 
            key={art.id} 
            className="cyber-card overflow-hidden cursor-pointer"
            onClick={() => handleArtClick(art)}
          >
            <CardContent className="p-0">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={art.thumbnail} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                />
                <div className="absolute bottom-4 right-4 bg-cyber-dark/80 p-2 rounded-full">
                  <Code className="h-5 w-5 text-cyber-accent" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{art.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{art.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl bg-cyber-dark border border-cyber-accent/30">
          {selectedArt && (
            <div>
              <h2 className="text-2xl font-bold text-cyber-accent mb-4">{selectedArt.title}</h2>
              <div className="mb-4">
                <img 
                  src={selectedArt.thumbnail} 
                  alt={selectedArt.title} 
                  className="w-full h-64 object-cover rounded-md" 
                />
              </div>
              <p className="text-gray-300 mb-6">{selectedArt.description}</p>
              <div className="bg-[#1e1e3f] rounded-md overflow-hidden">
                <div className="flex items-center justify-between bg-[#131336] px-4 py-2">
                  <span className="text-gray-400">Sample Code</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
                <pre className="p-4 text-gray-300 overflow-x-auto"><code>{selectedArt.codeSnippet}</code></pre>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ArtGallery;
