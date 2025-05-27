import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YoutubeEmbed from './YoutubeEmbed';

interface VideoData {
  id: number;
  title: string;
  youtubeId?: string;
  vimeoId?: string;
  description: string;
  type: 'youtube' | 'vimeo';
}

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState('youtube');

  // Updated with your specific YouTube video IDs
  const videos: VideoData[] = [
    {
      id: 1,
      title: "Featured Video 1",
      youtubeId: "8vxFQ_BkX0Q",
      description: "Educational content showcasing technical skills and creative process.",
      type: 'youtube'
    },
    {
      id: 2,
      title: "Featured Video 2", 
      youtubeId: "o_eVrpslFBM",
      description: "In-depth tutorial covering advanced techniques and methodologies.",
      type: 'youtube'
    },
    {
      id: 3,
      title: "Featured Video 3",
      youtubeId: "Ao1EbN3yDJw",
      description: "Comprehensive overview of project development and implementation.",
      type: 'youtube'
    },
    {
      id: 4,
      title: "Featured Video 4",
      youtubeId: "cC3g35h3qoU",
      description: "Detailed walkthrough of creative processes and technical solutions.",
      type: 'youtube'
    },
    {
      id: 5,
      title: "AI Takeover",
      vimeoId: "1087220508",
      description: "Showcase of 3D animation techniques and creative process.",
      type: 'vimeo'
    },
    {
      id: 6,
      title: "Humanity Reborn",
      vimeoId: "1087221195", 
      description: "Demonstration of motion graphics skills and effects.",
      type: 'vimeo'
    },
    {
      id: 7,
      title: "The Future of Creatorkwam",
      vimeoId: "1087225071",
      description: "A compilation of visual effects work showcasing technical skills.",
      type: 'vimeo'
    },
    {
      id: 8,
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

  const handleTabChange = (value: string) => {
    console.log('Tab changed to:', value);
    setActiveTab(value);
  };

  const handleYouTubeClick = () => {
    console.log('YouTube button clicked - opening channel');
    try {
      const url = 'https://www.youtube.com/@CreatorKwam';
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening YouTube channel:', error);
      window.location.href = 'https://www.youtube.com/@CreatorKwam';
    }
  };
  
  return (
    <section id="videos" className="section-container bg-transparent">
      <h2 className="section-heading">Video Content</h2>
      <p className="text-gray-300 max-w-2xl mb-8">
        Explore my video content covering digital art techniques, creative process, and technical demonstrations.
      </p>
      
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-6xl mx-auto">
        <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2 bg-cyber-light">
          <TabsTrigger 
            value="youtube" 
            className="text-white data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark hover:bg-cyber-accent/20 transition-colors cursor-pointer"
          >
            <Youtube className="mr-2 h-4 w-4" />
            YouTube
          </TabsTrigger>
          <TabsTrigger 
            value="vimeo" 
            className="text-white data-[state=active]:bg-cyber-accent data-[state=active]:text-cyber-dark hover:bg-cyber-accent/20 transition-colors cursor-pointer"
          >
            <Video className="mr-2 h-4 w-4" />
            Video Editing
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="youtube" className="focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.filter(v => v.type === 'youtube').map((video) => (
              <Card 
                key={video.id} 
                className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg bg-black">
                    <YoutubeEmbed embedId={video.youtubeId!} title={video.title} />
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
          onClick={handleYouTubeClick}
          className="cyber-button inline-flex mx-auto hover:bg-cyber-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer no-underline"
          style={{ pointerEvents: 'auto' }}
        >
          <Youtube className="mr-2 h-5 w-5" />
          Visit My YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
