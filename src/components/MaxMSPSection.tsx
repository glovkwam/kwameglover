
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines, FileCode } from 'lucide-react';

const MaxMSPSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <section id="maxmsp" className="section-container bg-cyber-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px]"></div>
      
      <h2 className="section-heading relative z-10">MaxMSP Art Project</h2>
      <p className="text-gray-300 max-w-2xl mb-12 relative z-10">
        An interactive audio-visual experience created with MaxMSP and JavaScript, bridging the gap between sound and visual art.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div>
          <Card className="cyber-card h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AudioLines className="h-6 w-6 mr-2 text-cyber-accent" />
                Sound Wave Visualizer
              </h3>
              <p className="text-gray-300 mb-6">
                This project combines MaxMSP's audio processing capabilities with JavaScript visualizations to create 
                an interactive experience that transforms sound into dynamic visual patterns.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyber-accent mb-2">Features</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Real-time audio analysis using MaxMSP</li>
                    <li>Custom JavaScript shader rendering</li>
                    <li>User interaction via webcam motion tracking</li>
                    <li>Dynamic color mapping based on audio frequencies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyber-accent mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">MaxMSP</span>
                    <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">WebGL</span>
                    <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">GLSL Shaders</span>
                    <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">Web Audio API</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="cyber-button w-full"
              >
                <FileCode className="mr-2 h-5 w-5" />
                {showDetails ? "Hide Code Sample" : "View Code Sample"}
              </button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <div className="relative aspect-video bg-cyber-light rounded-lg overflow-hidden border border-cyber-accent/30">
            <img 
              src="/kg.gif" 
              alt="MaxMSP Project Demo" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="bg-cyber-accent/90 hover:bg-cyber-accent transition-colors duration-300 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {showDetails && (
            <Card className="cyber-card mt-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-cyber-accent mb-4">JavaScript Code Sample</h4>
                <pre className="bg-cyber-dark p-4 rounded-lg overflow-x-auto text-sm text-gray-300">
                  {`// Audio analyzer and visualization code
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function draw() {
  // Get frequency data
  analyser.getByteFrequencyData(dataArray);
  
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Set line properties
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(0, 246, 255, 0.8)';
  
  // Begin drawing path
  ctx.beginPath();
  
  const sliceWidth = canvas.width / bufferLength;
  let x = 0;
  
  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * canvas.height / 2;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    
    x += sliceWidth;
  }
  
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  
  requestAnimationFrame(draw);
}`}
                </pre>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default MaxMSPSection;
