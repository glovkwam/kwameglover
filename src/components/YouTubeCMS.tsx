
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { PlusCircle, Save, Trash2, X } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

interface YouTubeCMSProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideos: VideoData[];
  onSave: (videos: VideoData[]) => void;
}

// Helper function to extract YouTube ID from URL or use direct ID
const extractYouTubeId = (url: string): string => {
  if (!url) return '';
  
  // Check if it's already an ID (not a URL)
  if (url.length < 20 && !url.includes('/') && !url.includes('.')) {
    return url;
  }
  
  // Extract from URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url;
};

const YouTubeCMS: React.FC<YouTubeCMSProps> = ({ isOpen, onClose, initialVideos, onSave }) => {
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

  const handleSave = () => {
    onSave(videos);
    toast({
      title: "Changes Saved",
      description: "Your video collection has been updated."
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-cyber-dark p-6 rounded-lg border border-cyber-accent shadow-[0_0_15px_rgba(0,246,255,0.3)] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-accent">YouTube Content Manager</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-cyber-accent hover:bg-transparent"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Current Videos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Current Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video, index) => (
                <Card key={video.id} className="bg-cyber-dark border border-cyber-light">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-white">
                      <Input 
                        name="title"
                        value={video.title}
                        onChange={(e) => handleInputChange(e, index)}
                        className="bg-cyber-dark border-cyber-light text-white"
                        placeholder="Video Title"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <img 
                          src={video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-20 object-cover rounded"
                        />
                      </div>
                      <div className="col-span-2 space-y-2">
                        <div>
                          <label className="text-xs text-gray-400">YouTube URL/ID</label>
                          <Input
                            name="youtubeId"
                            value={video.youtubeId}
                            onChange={(e) => handleInputChange(e, index)}
                            className="bg-cyber-dark border-cyber-light text-white text-sm h-8"
                            placeholder="YouTube URL or ID"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-400">Thumbnail URL (optional)</label>
                          <Input
                            name="thumbnail"
                            value={video.thumbnail}
                            onChange={(e) => handleInputChange(e, index)}
                            className="bg-cyber-dark border-cyber-light text-white text-sm h-8"
                            placeholder="Custom thumbnail URL"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">Description</label>
                      <Textarea
                        name="description"
                        value={video.description}
                        onChange={(e) => handleInputChange(e, index)}
                        className="bg-cyber-dark border-cyber-light text-white"
                        placeholder="Video description"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteVideo(video.id)}
                      className="ml-auto"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Add New Video */}
          <Card className="bg-cyber-dark border border-cyber-accent">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-cyber-accent">Add New Video</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs text-gray-400">Title*</label>
                <Input 
                  name="title"
                  value={newVideo.title}
                  onChange={handleInputChange}
                  className="bg-cyber-dark border-cyber-light text-white"
                  placeholder="Video Title"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400">YouTube URL/ID*</label>
                <Input
                  name="youtubeId"
                  value={newVideo.youtubeId}
                  onChange={handleInputChange}
                  className="bg-cyber-dark border-cyber-light text-white"
                  placeholder="Paste YouTube URL or Video ID"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400">Custom Thumbnail URL (optional)</label>
                <Input
                  name="thumbnail"
                  value={newVideo.thumbnail}
                  onChange={handleInputChange}
                  className="bg-cyber-dark border-cyber-light text-white"
                  placeholder="Leave empty to use YouTube thumbnail"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400">Description</label>
                <Textarea
                  name="description"
                  value={newVideo.description}
                  onChange={handleInputChange}
                  className="bg-cyber-dark border-cyber-light text-white"
                  placeholder="Video description"
                />
              </div>
              <Button 
                onClick={handleAddVideo}
                className="w-full"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Video
              </Button>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end">
            <Button 
              onClick={handleSave}
              className="bg-cyber-accent text-cyber-dark hover:bg-cyber-accent/80"
            >
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCMS;
