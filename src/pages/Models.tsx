import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelViewer from '@/components/ModelViewer';
import { Card, CardContent } from "@/components/ui/card";
import { AudioLines, FileCode, Cuboid } from 'lucide-react';

const Models = () => {
  useEffect(() => {
    document.title = "3D Models & MaxMSP | Digital Artist Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg">
      <div className="floating-orb w-96 h-96 top-10 -left-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-10 -right-20 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/3 right-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      
      <Navbar />
      <section className="section-container bg-transparent relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
        
        <h2 className="section-heading relative z-10">Interactive 3D Projects</h2>
        <p className="text-gray-300 max-w-3xl mb-12 relative z-10 animate-fade-in">
          A collection of 3D models and interactive media projects created using Blender, MaxMSP, 
          Cinema 4D, and Adobe Creative Suite. These projects showcase the intersection of visual art, 
          sound design, and interactive technology.
        </p>
        
        <div className="grid grid-cols-1 gap-12 relative z-10 mb-12">
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">VR Project</h3>
              <p className="text-gray-300 mb-6">
                A virtual reality exploration showcasing immersive design techniques and interactive elements.
                Created with Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f1e40aed-80c8-46d5-b76d-f4017f33d0d0.png" 
                  alt="VR Project" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain"
                />
              </div>
            </CardContent>
          </Card>
        
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Wonderland Project</h3>
              <p className="text-gray-300 mb-6">
                An interactive 3D experience exploring creative digital environments and immersive storytelling.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="https://sjsu-cadre-classes.github.io/SJSU_Art_101_F22_02/Groups/Kwame_Zuka_James_zak/wonderlandproject/" 
                  frameBorder="0" 
                  scrolling="yes" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-6">
                <img 
                  src="https://cdn.glitch.global/93c093d6-9c56-4aeb-8bee-ed8806236dd4/VR.JPEG?v=1668817067984" 
                  alt="Wonderland Project" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain mx-auto"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">My Room Blend</h3>
              <p className="text-gray-300 mb-6">
                An interactive 3D room environment with custom design elements and interactive features.
                Created using Adobe Illustrator and Blender Substance Painter.
              </p>
              <div className="w-full aspect-[21/9] bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  src="https://myroomblend.glitch.me/" 
                  frameBorder="0" 
                  scrolling="yes" 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/1188abf2-1e5e-44d2-baa4-888c4a383c40.png" 
                  alt="My Room Blend" 
                  className="rounded-md border border-cyber-accent/30 max-h-80 object-contain mx-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h2 className="section-heading relative z-10">JavaScript Artwork</h2>
          <Card className="cyber-card overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Butterfly Animation</h3>
              <p className="text-gray-300 mb-6">
                A creative JavaScript animation that responds to mouse movement, featuring dynamic shapes and colors.
              </p>
              <div className="w-full max-w-3xl mx-auto bg-cyber-dark relative overflow-hidden rounded-md border border-cyber-accent/30">
                <iframe 
                  srcDoc={`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>JavaScript Animation</title>
                      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
                      <style>
                        body { margin: 0; padding: 0; overflow: hidden; background-color: #111; }
                        canvas { display: block; }
                      </style>
                    </head>
                    <body>
                      <script>
                        let mic;
                        let ground;
                        let stars;
                        let sunX = 0;
                        
                        let myInt = 52;
                        let yoff = 0;
                        const dots = [];
                        var x = 280;
                        var y = 280;
                        function setup() {
                          createCanvas(350, 350);
                          frameRate(10);
                          mic = new p5.AudioIn();
                          mic.start();
                          stars = createGraphics(width, height);
                          stars.background(32, 0, 64);
                          for (let i = 0; i < 1000; i++) {
                            stars.stroke(255);
                            stars.strokeWeight(2);
                            stars.point(random(width), random(height));
                          }
                          ground = createGraphics(width, height * 0.25);
                          ground.background(32);
                          for (let i = 0; i < 1000; i++) {
                            ground.noStroke();
                            ground.fill(0, random(50), 0);
                            ground.square(random(ground.width), random(ground.height), 10);
                          }
                        }
                        
                        function draw() {
                          image(stars, 0, 0);
                          image(ground, 0, height * 0.75);
                        
                          push();
                          translate(width / 2, height / 2);
                          let da = PI / 200;
                          let dx = 0.03;
                          let xoff = 0;
                        
                          beginShape();
                          for (let a = 0; a <= TWO_PI; a += da) {
                            let n = noise(xoff, yoff);
                            let r = sin(2 * a) * map(n, 0, 1, 5, 300);
                            let x = r * cos(a);
                            let y = r * sin(a);
                            if (a < PI) {
                              xoff += dx;
                            } else {
                              xoff -= dx;
                            }
                            vertex(x, y);
                          }
                          endShape();
                          pop();
                          yoff += 0.01;
                          
                          push();
                          fill(229, 220, 170);
                          noStroke();
                          circle(sunX, height / 9, 50);
                          sunX = (sunX + 3) % width;
                          pop();
                          
                          push();
                          stroke(100);
                          strokeWeight(10);
                          line(250, 200, 300, 50, 90, 100);
                          pop();
                          
                          push();
                          stroke(100);
                          strokeWeight(10);
                          line(250, 210, 200, 50, 90, 90);
                          pop();
                          
                          body();
                          head();
                          leftEye(width / 2.1, height / 2.4);
                          rightEye();
                          mouth();
                          
                          for (var i=0; i<10; i++) {
                            var xDis = random(-180, 180);
                            var yDis = random(-180, 180);
                            butterfly(mouseX+xDis, mouseY+yDis);
                          }
                         
                          x = x+random(-5, 6);
                          y = y+random(-4, 4);
                          butterfly(x, y);
                        }
                        
                        function mouth() {
                          ellipse(height / 2, width / 2.2, 30, 10);
                        }
                        
                        function head() {
                          fill(100, 10, 250);
                          ellipse(width / 2, height / 2.3, 70);
                        }
                        
                        function leftEye(xpos, ypos) {
                          fill(25, 250, 10);
                          ellipse(xpos, ypos, 10, 10);
                        }
                        
                        function rightEye() {
                          ellipse(width / 1.9, height / 2.4, 10, 10);
                        }
                        
                        function body() {
                          fill(108, 10, 250);
                          ellipse(width / 2, height / 1.6, 50, 200);
                        }
                        
                        function butterfly(x, y) {
                          line(x-15,y-10,x,y);
                          line(x+15,y-10,x,y);
                          fill(255, 220, 0);
                          ellipse(x-25,y+20,35,30);
                          ellipse(x-25,y+40,35,30);
                          ellipse(x+25,y+20,35,30);
                          ellipse(x+25,y+40,35,30);
                          ellipse(x,y+30,30,60);
                        }
                      </script>
                    </body>
                    </html>
                  `}
                  width="100%" 
                  height="400" 
                  className="border-0"
                  title="JavaScript Animation"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  This interactive animation combines visual elements with user interaction. Move your mouse to interact with the butterflies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h2 className="section-heading relative z-10">MaxMSP Audio-Visual Project</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <Card className="cyber-card h-full transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AudioLines className="h-6 w-6 mr-2 text-cyber-accent" />
                    Sound Wave Visualizer
                  </h3>
                  <p className="text-gray-300 mb-6">
                    An interactive audio-visual experience created with MaxMSP and JavaScript, bridging the gap between sound and visual art.
                    This project combines MaxMSP's audio processing capabilities with custom JavaScript visualizations to create 
                    dynamic patterns that respond to sound input.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-accent mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">MaxMSP</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">WebGL</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">Adobe After Effects</span>
                        <span className="bg-cyber-light px-3 py-1 rounded-full text-sm">Ableton Live</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyber-accent mb-2">Features</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Real-time audio analysis using MaxMSP</li>
                        <li>Custom JavaScript shader rendering</li>
                        <li>User interaction via webcam motion tracking</li>
                        <li>Dynamic color mapping based on audio frequencies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative group">
              <div className="relative aspect-video bg-cyber-light rounded-lg overflow-hidden border border-cyber-accent/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]">
                <img 
                  src="https://source.unsplash.com/random/800x450?audio+visualizer" 
                  alt="MaxMSP Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-cyber-accent/90 hover:bg-cyber-accent text-cyber-dark transition-colors duration-300 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 010 9.87v4.263a1 1 0 01.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Models;
