
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Settings } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useCMS } from '@/context/CMSContext';
import { VideoData } from '@/types/youtube';

const YouTubeSection = () => {
  const { toast } = useToast();
  const { openCMS } = useCMS();
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  
  // Initialize with sample data or load from localStorage
  const [videos, setVideos] = useState<VideoData[]>(() => {
    const savedVideos = localStorage.getItem('youtube-videos');
    if (savedVideos) {
      try {
        return JSON.parse(savedVideos);
      } catch (e) {
        console.error('Error parsing saved videos', e);
        return getDefaultVideos();
      }
    }
    return getDefaultVideos();
  });
  
  // Save videos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('youtube-videos', JSON.stringify(videos));
  }, [videos]);

  // Sample data function - used as fallback
  function getDefaultVideos(): VideoData[] {
    return [
      {
        id: 1,
        title: "Digital Art Process",
        thumbnail: "https://source.unsplash.com/random/800x450?digital+art",
        youtubeId: "DHzldFRClGI",
        description: ""
      },
      {
        id: 2,
        title: "3D Modeling Basics",
        thumbnail: "https://source.unsplash.com/random/800x450?3d+modeling",
        youtubeId: "dQw4w9WgXcQ",
        description: ""
      },
      {
        id: 3,
        title: "Cybersecurity for Artists",
        thumbnail: "https://source.unsplash.com/random/800x450?cybersecurity",
        youtubeId: "dQw4w9WgXcQ",
        description: ""
      },
      {
        id: 4,
        title: "Game Development Journey",
        thumbnail: "https://source.unsplash.com/random/800x450?game+development",
        youtubeId: "dQw4w9WgXcQ",
        description: ""
      },
      {
        id: 5,
        title: "Cloud Computing for Creative Projects",
        thumbnail: "https://source.unsplash.com/random/800x450?cloud+computing",
        youtubeId: "dQw4w9WgXcQ",
        description: ""
      }
    ];
  }
  
  const handleCmsSave = (updatedVideos: VideoData[]) => {
    setVideos(updatedVideos);
    toast({
      title: "YouTube Content Updated",
      description: `Your video collection has been updated with ${updatedVideos.length} videos.`,
    });
  };
  
  const handleManageContent = () => {
    openCMS('youtube');
  };
  
  return (
    <section id="youtube" className="section-container bg-transparent">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="section-heading">YouTube Channel</h2>
          <p className="text-gray-300 max-w-2xl">
            Check out my YouTube videos covering digital art techniques, Artificial intelligence insights, and technological insights.
          </p>
        </div>
        <Button
          variant="outline" 
          className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10"
          onClick={handleManageContent}
        >
          <Settings className="mr-2 h-4 w-4" />
          Manage Content
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                  alt={video.title} 
                  className="w-full h-48 object-cover" 
                  onError={(e) => {
                    // Fallback if maxresdefault doesn't exist
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('maxresdefault')) {
                      target.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                    }
                  }}
                />
                <button 
                  className="absolute inset-0 bg-cyber-dark/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="bg-cyber-accent/90 rounded-full p-3">
                    <Youtube className="h-8 w-8 text-cyber-dark" />
                  </div>
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/@CreatorKwam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cyber-button inline-flex mx-auto"
        >
          <Youtube className="mr-2 h-5 w-5" />
          Visit My YouTube Channel
        </a>
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-cyber-light p-2 rounded-lg">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-cyber-accent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                width="100%" 
                height="500" 
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`} 
                title={selectedVideo.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;
