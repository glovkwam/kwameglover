
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Wifi, Thermometer, Camera } from 'lucide-react';

const PicoWSection = () => {
  const projects = [
    {
      id: 1,
      title: "IoT Temperature Monitor",
      description: "Real-time temperature and humidity monitoring system with web dashboard",
      technologies: ["MicroPython", "WiFi", "Sensors", "Web API"],
      features: ["Remote monitoring", "Data logging", "Alerts", "Web interface"],
      icon: <Thermometer className="h-6 w-6" />,
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Smart LED Controller",
      description: "WiFi-controlled RGB LED strips with custom patterns and scheduling",
      technologies: ["C++", "WiFi", "NeoPixel", "Timer"],
      features: ["Color patterns", "Scheduling", "Mobile control", "Energy efficient"],
      icon: <Zap className="h-6 w-6" />,
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Security Camera System",
      description: "Motion-activated camera system with cloud storage and notifications",
      technologies: ["Camera Module", "Motion Detection", "Cloud Storage", "Notifications"],
      features: ["Motion detection", "Cloud backup", "Real-time alerts", "Night vision"],
      icon: <Camera className="h-6 w-6" />,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Weather Station",
      description: "Comprehensive weather monitoring with multiple sensors and data visualization",
      technologies: ["Multiple Sensors", "Data Visualization", "WiFi", "API Integration"],
      features: ["Multi-sensor data", "Weather predictions", "Historical data", "API integration"],
      icon: <Wifi className="h-6 w-6" />,
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Raspberry Pi <span className="text-green-400">Pico W</span> Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Explore my IoT and microcontroller projects using the Raspberry Pi Pico W. 
          From simple LED controllers to complex sensor networks and automation systems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="border-green-400 text-green-400">
            <Wifi className="mr-2 h-4 w-4" />
            WiFi Enabled
          </Badge>
          <Badge variant="outline" className="border-blue-400 text-blue-400">
            <Zap className="mr-2 h-4 w-4" />
            Low Power
          </Badge>
          <Badge variant="outline" className="border-orange-400 text-orange-400">
            <Thermometer className="mr-2 h-4 w-4" />
            Sensor Integration
          </Badge>
        </div>

        <div className="flex justify-center gap-4">
          <Button 
            asChild
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <a 
              href="https://github.com/glovkwam/Arduino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View Code Repository
            </a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="bg-cyber-dark border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-400/20 rounded-lg text-green-400">
                    {project.icon}
                  </div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </div>
                <Badge className={`${getDifficultyColor(project.difficulty)} text-white`}>
                  {project.difficulty}
                </Badge>
              </div>
              <CardDescription className="text-gray-300">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="bg-cyber-dark border border-green-400/30 p-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400 mb-4">About Raspberry Pi Pico W</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6">
              The Raspberry Pi Pico W is a powerful microcontroller board with built-in WiFi capabilities, 
              making it perfect for IoT projects. With its dual-core ARM Cortex-M0+ processor and extensive 
              GPIO pins, it's ideal for sensor integration, automation, and remote monitoring applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-green-400/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Connectivity</h4>
                <p className="text-sm text-gray-300">WiFi 802.11n wireless networking</p>
              </div>
              <div className="p-4 border border-green-400/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Programming</h4>
                <p className="text-sm text-gray-300">MicroPython & C/C++ support</p>
              </div>
              <div className="p-4 border border-green-400/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">GPIO</h4>
                <p className="text-sm text-gray-300">26 multifunction GPIO pins</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PicoWSection;
