
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VideoData {
  id: number;
  title: string;
  youtubeId?: string;
  vimeoId?: string;
  description: string;
  type: 'youtube' | 'vimeo';
}

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  
  // Working video data with verified IDs
  const videos: VideoData[] = [
    {
      id: 1,
      title: "Neural Networks Explained",
      youtubeId: "aircAruvnKk",
      description: "Deep learning fundamentals explained with beautiful visualizations.",
      type: 'youtube'
    },
    {
      id: 2,
      title: "Machine Learning Overview", 
      youtubeId: "ukzFI9rgwfU",
      description: "Comprehensive overview of machine learning concepts and applications.",
      type: 'youtube'
    },
    {
      id: 3,
      title: "AI Technology Trends",
      youtubeId: "JMLsHI8aV0g",
      description: "Exploring the latest trends in artificial intelligence technology.",
      type: 'youtube'
    },
    {
      id: 4,
      title: "Programming Tutorial",
      youtubeId: "rfscVS0vtbw",
      description: "Educational programming content covering various development topics.",
      type: 'youtube'
    },
    {
      id: 5,
      title: "Tech Innovation",
      youtubeId: "dQw4w9WgXcQ",
      description: "Showcasing innovative technology solutions and creative processes.",
      type: 'youtube'
    },
    {
      id: 6,
      title: "AI Takeover",
      vimeoId: "1087220508",
      description: "Showcase of 3D animation techniques and creative process.",
      type: 'vimeo'
    },
    {
      id: 7,
      title: "Humanity Reborn",
      vimeoId: "1087221195", 
      description: "Demonstration of motion graphics skills and effects.",
      type: 'vimeo'
    },
    {
      id: 8,
      title: "The Future of Creatorkwam",
      vimeoId: "1087225071",
      description: "A compilation of visual effects work showcasing technical skills.",
      type: 'vimeo'
    },
    {
      id: 9,
      title: "The Kaiju Returns",
      vimeoId: "1087228874",
      description: "Video editing portfolio with various styles and techniques.",
      type: 'vimeo'
    }
  ];
  
  // Add script for Vimeo player
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section id="videos" className="section-container bg-transparent">
      <h2 className="section-heading">Video Content</h2>
      <p className="text-gray-300 max-w-2xl mb-8">
        Explore my video content covering digital art techniques, creative process, and technical demonstrations.
      </p>
      
      <Tabs defaultValue="youtube" className="w-full max-w-6xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2 bg-cyber-light">
          <TabsTrigger 
            value="youtube" 
            className="text-white data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark hover:bg-cyber-accent/20 transition-colors"
          >
            <Youtube className="mr-2 h-4 w-4" />
            YouTube
          </TabsTrigger>
          <TabsTrigger 
            value="vimeo" 
            className="text-white data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark hover:bg-cyber-accent/20 transition-colors"
          >
            <Video className="mr-2 h-4 w-4" />
            Video Editing
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="youtube" className="focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.filter(v => v.type === 'youtube').map((video) => (
              <Card 
                key={video.id} 
                className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)] cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 transform hover:scale-110 transition-transform">
                        <Youtube className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="vimeo" className="focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.filter(v => v.type === 'vimeo').map((video) => (
              <Card 
                key={video.id} 
                className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
              >
                <CardContent className="p-0">
                  <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                    <iframe 
                      src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0`} 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                      allowFullScreen
                      title={video.title}
                      style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
                      className="rounded-t-lg"
                    ></iframe>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/@CreatorKwam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cyber-button inline-flex mx-auto hover:bg-cyber-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Youtube className="mr-2 h-5 w-5" />
          Visit My YouTube Channel
        </a>
      </div>
      
      {/* Enhanced Video Modal */}
      {selectedVideo && selectedVideo.type === 'youtube' && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl bg-cyber-dark p-6 rounded-lg border border-cyber-accent">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyber-accent transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`} 
                title={selectedVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            
            <p className="text-gray-300 mt-4">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
