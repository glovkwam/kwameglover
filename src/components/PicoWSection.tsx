import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Code, Settings } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import CMSButton from '@/components/ui/cms-button';

const PicoWSection = () => {
  const { openCMS } = useCMS();

  return (
    <section id="picow" className="section-container bg-cyber-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-purple/10 via-transparent to-transparent"></div>
      
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h2 className="section-heading">Pico W Microcontroller Projects</h2>
          <p className="text-gray-300 max-w-2xl">
            Exploring the intersection of art and technology through creative projects using the Raspberry Pi Pico W microcontroller.
          </p>
        </div>
        <CMSButton section="picow" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <Card className="cyber-card row-span-2 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="h-6 w-6 text-cyber-accent mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Interactive LED Installation</h3>
            </div>
            
            <div className="mb-6">
              <img 
                src="https://source.unsplash.com/random/600x400?led+lights" 
                alt="LED Installation" 
                className="w-full h-64 object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity duration-300" 
              />
              <p className="text-gray-300 text-sm">
                An interactive LED installation that responds to movement and sound in the environment, 
                creating an immersive experience that bridges the digital and physical worlds.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-semibold text-cyber-accent mb-2">Components Used</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  <li>Raspberry Pi Pico W</li>
                  <li>WS2812B LED strips</li>
                  <li>PIR motion sensors</li>
                  <li>MEMS microphone</li>
                  <li>Custom 3D printed enclosure</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-semibold text-cyber-accent mb-2">Technical Details</h4>
                <p className="text-gray-300 text-sm">
                  The installation uses MicroPython to process sensor data and control the LED patterns.
                  A web interface allows remote control and pattern selection via the Pico W's WiFi capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <CircuitBoard className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">Environmental Monitor</h3>
            </div>
            
            <img 
              src="https://source.unsplash.com/random/600x400?sensors" 
              alt="Environmental Monitor" 
              className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity duration-300" 
            />
            
            <p className="text-gray-300 text-sm">
              A connected device that monitors temperature, humidity, and air quality, 
              visualizing environmental data through an artistic dashboard.
            </p>
            
            <div className="mt-4">
              <h4 className="text-md font-semibold text-cyber-accent mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                <li>Real-time data collection</li>
                <li>Cloud connectivity via MQTT</li>
                <li>Custom visualization interface</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cyber-card transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-cyber-accent mr-2" />
              <h3 className="text-xl font-bold text-white">Code Sample</h3>
            </div>
            
            <pre className="bg-cyber-dark p-4 rounded-lg overflow-x-auto text-xs text-gray-300 h-[280px]">
              {`# MicroPython for Pico W LED Control
from machine import Pin
import network
import socket
import time
from neopixel import NeoPixel

# Configure the number of WS2812 LEDs
NUM_LEDS = 60
led_pin = Pin(28, Pin.OUT)
np = NeoPixel(led_pin, NUM_LEDS)

# WiFi credentials
ssid = 'YourWiFiNetwork'
password = 'YourPassword'

# Connect to WiFi
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)

# Wait for connection
max_wait = 10
while max_wait > 0:
    if wlan.status() < 0 or wlan.status() >= 3:
        break
    max_wait -= 1
    print('waiting for connection...')
    time.sleep(1)

# Define color patterns
def rainbow_cycle(wait):
    for j in range(255):
        for i in range(NUM_LEDS):
            rc_index = (i * 256 // NUM_LEDS) + j
            np[i] = wheel(rc_index & 255)
        np.write()
        time.sleep(wait)

def wheel(pos):
    # Generate rainbow colors
    if pos < 85:
        return (pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return (255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return (0, pos * 3, 255 - pos * 3)

# Start the light show
while True:
    rainbow_cycle(0.01)`}
            </pre>
          </CardContent>
        </Card>
        
        <Card className="cyber-card lg:col-span-2 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img 
                src="https://source.unsplash.com/random/300x300?electronics" 
                alt="Pico Project 1" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
              <img 
                src="https://source.unsplash.com/random/300x300?microcontroller" 
                alt="Pico Project 2" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
              <img 
                src="https://source.unsplash.com/random/300x300?circuit" 
                alt="Pico Project 3" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
              <img 
                src="https://source.unsplash.com/random/300x300?programming" 
                alt="Pico Project 4" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
              <img 
                src="https://source.unsplash.com/random/300x300?iot" 
                alt="Pico Project 5" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
              <img 
                src="https://source.unsplash.com/random/300x300?raspberry+pi" 
                alt="Pico Project 6" 
                className="w-full h-28 object-cover rounded-lg hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-semibold text-cyber-accent mb-2">Future Directions</h4>
              <p className="text-gray-300 text-sm">
                I'm currently exploring how these microcontroller projects can integrate with cybersecurity concepts,
                creating interactive installations that visualize network security principles and data privacy concerns.
                The next phase involves connecting these physical computing projects to cloud infrastructure for remote
                monitoring and control.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-16 text-center relative z-10">
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cyber-button inline-flex mx-auto transform transition duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,246,255,0.5)]"
        >
          <CircuitBoard className="mr-2 h-5 w-5" />
          View Code Repository
        </a>
      </div>
    </section>
  );
};

export default PicoWSection;
