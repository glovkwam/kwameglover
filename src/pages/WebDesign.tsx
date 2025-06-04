
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Globe, Code } from 'lucide-react';

const WebDesign = () => {
  useEffect(() => {
    document.title = "Web Design | Digital Artist Portfolio";
  }, []);

  const portfolioSites = [
    {
      title: "Webflow Portfolio",
      description: "Professional web design showcase built with Webflow featuring modern design principles and responsive layouts.",
      url: "https://kwames-awesome-site-671991.webflow.io/",
      image: "https://source.unsplash.com/random/800x600?webflow+design",
      tech: ["Webflow", "CSS", "JavaScript"]
    },
    {
      title: "GitHub Portfolio",
      description: "Custom portfolio website hosted on GitHub Pages showcasing full-stack development skills and creative projects.",
      url: "https://glovkwam.github.io/Kwame-Portfolio-/",
      image: "https://source.unsplash.com/random/800x600?portfolio+website",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
    },
    {
      title: "Creative Portfolio",
      description: "Creative work portfolio showcasing diverse design projects, digital art, and multimedia experiences.",
      url: "https://tallydabandz.myportfolio.com/work",
      image: "https://source.unsplash.com/random/800x600?creative+portfolio",
      tech: ["Adobe Portfolio", "Creative Suite", "Web Design"]
    }
  ];

  const handleSiteClick = (url: string) => {
    console.log('Opening site:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const createLinkMarkup = (url: string, text: string) => {
    return {
      __html: `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${text}</a>`
    };
  };

  return (
    <div className="min-h-screen hero-gradient text-white relative overflow-hidden">
      {/* Flickering background grid decoration */}
      <div className="absolute inset-0 flickering-grid"></div>
      
      {/* Animated background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyber-purple/10 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyber-neon/10 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '5s'}}></div>
      
      <div className="relative z-10">
        <Navbar />
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Web <span className="text-cyber-accent">Design</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12 text-center mx-auto">
            Explore my web design portfolio featuring responsive websites, creative interfaces, and modern web experiences.
          </p>
          
          {/* Portfolio Links Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyber-accent">Live Portfolio Sites</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <a 
                href="https://kwames-awesome-site-671991.webflow.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  Webflow Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Professional web design showcase built with Webflow</p>
              </a>
              
              <a 
                href="https://glovkwam.github.io/Kwame-Portfolio-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  GitHub Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Custom portfolio website hosted on GitHub Pages</p>
              </a>
              
              <a 
                href="https://tallydabandz.myportfolio.com/work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 border border-cyber-accent/30 rounded-lg hover:bg-cyber-accent/10 transition-colors group"
              >
                <h4 className="font-bold text-xl mb-2 flex items-center group-hover:text-cyber-accent">
                  Creative Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </h4>
                <p className="text-gray-300">Creative work portfolio showcasing diverse design projects</p>
              </a>
            </div>
          </div>
          
          {/* Project Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioSites.map((site, index) => (
              <Card key={index} className="cyber-card overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,246,255,0.3)]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-cyber-accent flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    {site.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{site.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleSiteClick(site.url)}
                    className="inline-flex items-center justify-center w-full py-2 px-4 bg-cyber-accent hover:bg-cyber-accent/80 text-cyber-dark rounded-md transition-colors font-medium cursor-pointer"
                  >
                    <span dangerouslySetInnerHTML={createLinkMarkup(site.url, "View Site")} />
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-cyber-light/10 rounded-lg p-8 border border-cyber-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Code className="mr-2 h-6 w-6 text-cyber-accent" />
              Web Development Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyber-accent mb-3">Frontend Technologies</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• HTML5 & CSS3</li>
                  <li>• JavaScript (ES6+)</li>
                  <li>• React & JSX</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyber-accent mb-3">Design Tools</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Webflow</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Figma</li>
                  <li>• UI/UX Design</li>
                  <li>• Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default WebDesign;
