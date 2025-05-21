
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  youtubeId?: string;
  description: string;
}

const YouTubeSection = () => {
  // Sample data - replace with your actual video data
  const videos: VideoData[] = [
    {
      id: 1,
      title: "Digital Art Process",
      thumbnail: "https://source.unsplash.com/random/800x450?digital+art",
      youtubeId: "https://www.youtube.com/watch?v=DHzldFRClGI", // Replace with your actual YouTube video ID
      description: "A walkthrough of my digital art creation process using cutting-edge tools."
    },
    {
      id: 2,
      title: "3D Modeling Basics",
      thumbnail: "https://source.unsplash.com/random/800x450?3d+modeling",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "Learn the basics of 3D modeling with this comprehensive tutorial."
    },
    {
      id: 3,
      title: "Cybersecurity for Artists",
      thumbnail: "https://source.unsplash.com/random/800x450?cybersecurity",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "How artists can protect their digital creations in an online world."
    },
    {
      id: 4,
      title: "Game Development Journey",
      thumbnail: "https://source.unsplash.com/random/800x450?game+development",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "My journey into game development - challenges and triumphs."
    },
    {
      id: 5,
      title: "Cloud Computing for Creative Projects",
      thumbnail: "https://source.unsplash.com/random/800x450?cloud+computing",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "How cloud computing enhances my creative workflow."
    }
  ];
  
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  
  return (
    <section id="youtube" className="section-container bg-transparent">
      <h2 className="section-heading">YouTube Channel</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Check out my YouTube videos covering digital art techniques, Artificial intelligence insights, and technological insights.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover" 
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
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/watch?v=DHzldFRClGI" 
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
