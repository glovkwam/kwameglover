
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Save } from 'lucide-react';
import { VideoData, YouTubeCMSProps } from '@/types/youtube';
import { extractYouTubeId } from '@/utils/youtubeUtils';
import VideoList from './youtube/VideoList';
import VideoForm from './youtube/VideoForm';

const YouTubeCMS: React.FC<YouTubeCMSProps> = ({ initialVideos, onSave }) => {
  const [videos, setVideos] = useState<VideoData[]>(initialVideos);
  const [newVideo, setNewVideo] = useState<Partial<VideoData>>({
    title: '',
    thumbnail: '',
    youtubeId: '',
    description: ''
  });

  // Reset videos when initialVideos change
  useEffect(() => {
    setVideos(initialVideos);
  }, [initialVideos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    
    if (index !== undefined) {
      // Edit existing video
      const updatedVideos = [...videos];
      updatedVideos[index] = {
        ...updatedVideos[index],
        [name]: value
      };
      setVideos(updatedVideos);
    } else {
      // New video form
      setNewVideo({
        ...newVideo,
        [name]: value
      });
    }
  };

  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.youtubeId) {
      toast({
        title: "Missing Information",
        description: "Title and YouTube URL/ID are required.",
        variant: "destructive"
      });
      return;
    }

    const youtubeId = extractYouTubeId(newVideo.youtubeId || '');
    
    const videoToAdd: VideoData = {
      id: videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1,
      title: newVideo.title || '',
      thumbnail: newVideo.thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
      youtubeId: youtubeId,
      description: newVideo.description || ''
    };

    setVideos([...videos, videoToAdd]);
    setNewVideo({
      title: '',
      thumbnail: '',
      youtubeId: '',
      description: ''
    });
    
    toast({
      title: "Video Added",
      description: `${videoToAdd.title} has been added to your collection.`
    });
  };

  const handleDeleteVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id));
    toast({
      title: "Video Removed",
      description: "The video has been removed from your collection."
    });
  };

  return (
    <div className="space-y-6">
      {/* Current Videos */}
      <VideoList 
        videos={videos} 
        onInputChange={handleInputChange} 
        onDeleteVideo={handleDeleteVideo} 
      />

      {/* Add New Video */}
      <VideoForm 
        newVideo={newVideo} 
        onInputChange={handleInputChange} 
        onAddVideo={handleAddVideo} 
      />

      {/* Save Changes */}
      <div className="flex justify-end">
        <Button 
          onClick={() => onSave(videos)}
          className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/80"
        >
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>
    </div>
  );
};

export default YouTubeCMS;
