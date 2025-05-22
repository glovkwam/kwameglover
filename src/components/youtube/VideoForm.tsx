
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from 'lucide-react';
import { VideoData } from '@/types/youtube';

interface VideoFormProps {
  newVideo: Partial<VideoData>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAddVideo: () => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ 
  newVideo, 
  onInputChange, 
  onAddVideo 
}) => {
  return (
    <Card className="bg-cyber-dark border border-cyber-accent">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-cyber-accent">Add New Video</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-xs text-gray-400">Title*</label>
          <Input 
            name="title"
            value={newVideo.title || ''}
            onChange={onInputChange}
            className="bg-cyber-dark border-cyber-light text-white"
            placeholder="Video Title"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400">YouTube URL/ID*</label>
          <Input
            name="youtubeId"
            value={newVideo.youtubeId || ''}
            onChange={onInputChange}
            className="bg-cyber-dark border-cyber-light text-white"
            placeholder="Paste YouTube URL or Video ID"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400">Custom Thumbnail URL (optional)</label>
          <Input
            name="thumbnail"
            value={newVideo.thumbnail || ''}
            onChange={onInputChange}
            className="bg-cyber-dark border-cyber-light text-white"
            placeholder="Leave empty to use YouTube thumbnail"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400">Description</label>
          <Textarea
            name="description"
            value={newVideo.description || ''}
            onChange={onInputChange}
            className="bg-cyber-dark border-cyber-light text-white"
            placeholder="Video description"
          />
        </div>
        <Button 
          onClick={onAddVideo}
          className="w-full"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Video
        </Button>
      </CardContent>
    </Card>
  );
};

export default VideoForm;
