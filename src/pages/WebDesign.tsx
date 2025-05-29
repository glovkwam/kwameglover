
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Globe, Code, Terminal, Database } from 'lucide-react';

const WebDesign = () => {
  useEffect(() => {
    document.title = "Web Development | Digital Portfolio";
  }, []);

  const portfolioSites = [
    {
      title: "webflow_portfolio.site",
      description: "Modern web application built with Webflow's visual development platform. Features responsive design patterns, CSS Grid layouts, and interactive JavaScript components for optimal user experience.",
      url: "https://kwames-awesome-site-671991.webflow.io/",
      image: "https://source.unsplash.com/random/800x600?webflow+design+code",
      tech: ["Webflow", "CSS3", "JavaScript ES6+", "Responsive Design"]
    },
    {
      title: "github_pages.deploy",
      description: "Full-stack portfolio deployment utilizing GitHub's CI/CD pipeline. Custom domain configuration, automated build processes, and version control integration for seamless development workflow.",
      url: "https://glovkwam.github.io/Kwame-Portfolio-/",
      image: "https://source.unsplash.com/random/800x600?github+portfolio+coding",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Actions", "CI/CD"]
    },
    {
      title: "creative_portfolio.app",
      description: "Digital art showcase platform featuring dynamic content management, image optimization algorithms, and interactive gallery components built with modern web standards.",
      url: "https://tallydabandz.myportfolio.com/work",
      image: "https://source.unsplash.com/random/800x600?creative+portfolio+development",
      tech: ["Adobe Portfolio API", "Creative Cloud SDK", "Responsive Framework"]
    }
  ];

  const handleSiteClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white animated-bg font-mono">
      <div className="floating-orb w-96 h-96 top-60 -right-40 blur-3xl"></div>
      <div className="floating-orb w-80 h-80 bottom-20 -left-30 blur-3xl"></div>
      <div className="floating-orb w-64 h-64 top-1/2 left-1/4 blur-3xl opacity-20 animate-rotate-slow"></div>
      <div className="code-matrix"></div>
      
      <Navbar />
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">
          <Terminal className="inline mr-3 h-10 w-10 text-cyber-accent" />
          Web <span className="text-cyber-accent">Development</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mb-12 text-center mx-auto font-mono">
          <span className="text-cyber-accent">{'>'}</span> Full-stack development portfolio featuring modern web technologies and responsive design implementations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioSites.map((site, index) => (
            <Card key={index} className="cyber-card overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,246,255,0.3)] border border-cyber-accent/30">
              <div className="aspect-video overflow-hidden border-b border-cyber-accent/20">
                <img 
                  src={site.image} 
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-cyber-accent flex items-center font-mono">
                  <Globe className="mr-2 h-5 w-5" />
                  {site.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">{site.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {site.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded-lg border border-cyber-accent/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleSiteClick(site.url)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    backgroundColor: 'transparent',
                    border: '2px solid #9b87f5',
                    color: '#9b87f5',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
                    width: '100%',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'rgba(155, 135, 245, 0.1)';
                    target.style.transform = 'scale(1.02)';
                    target.style.boxShadow = '0 0 15px rgba(155, 135, 245, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.transform = 'scale(1)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  ./view_site <ExternalLink className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-cyber-light/10 rounded-lg p-8 border border-cyber-accent/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center font-mono">
            <Code className="mr-2 h-6 w-6 text-cyber-accent" />
            development_stack.config
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-cyber-accent mb-3 font-mono flex items-center">
                <Terminal className="mr-2 h-4 w-4" />
                frontend_technologies:
              </h4>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> HTML5 & CSS3</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> JavaScript (ES6+)</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> React.js & TypeScript</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Tailwind CSS Framework</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Responsive Grid Systems</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyber-accent mb-3 font-mono flex items-center">
                <Database className="mr-2 h-4 w-4" />
                development_tools:
              </h4>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Webflow Visual Editor</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Adobe Creative Suite</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Figma Design Systems</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> UI/UX Design Patterns</li>
                <li className="flex items-center"><span className="text-cyber-accent mr-2">{'>'}</span> Git Version Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebDesign;
