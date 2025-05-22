import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  youtubeId?: string;
  description: string;
}

const VideoSection = () => {
  // Sample data - replace with your actual video data
  const videos: VideoData[] = [
    {
      id: 1,
      title: "How Good  is Deepseek AI?",
      youtubeId: "8vxFQ_BkX0Q&t", // Replace with your actual YouTube video ID
      description: "How good is Deepseek AI? This Chinese AI is OVERPOWERED!"
    },
    {
      id: 2,
      title: "3D Modeling Basics",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "Learn the basics of 3D modeling with this comprehensive tutorial."
    },
    {
      id: 3,
      title: "Cybersecurity for Artists",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "How artists can protect their digital creations in an online world."
    },
    {
      id: 4,
      title: "Game Development Journey",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "My journey into game development - challenges and triumphs."
    },
    {
      id: 5,
      title: "Cloud Computing for Creative Projects",
      youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
      description: "How cloud computing enhances my creative workflow."
    }
  ];
  
  return (
    <section id="videos" className="section-container bg-transparent">
      <h2 className="section-heading">Video Content</h2>
      <p className="text-gray-300 max-w-2xl mb-12">
        Explore my video content covering digital art techniques, cybersecurity insights, and creative tutorials.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className="cyber-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]"
          >
            <CardContent className="p-0">
              {/* Embedded YouTube Video */}
              <div className="relative aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
              
              {/* Video Info */}
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
    </section>
  );
};

export default VideoSection;
