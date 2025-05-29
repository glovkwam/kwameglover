
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from 'lucide-react';
import { VideoData } from '@/types/youtube';

interface VideoCardProps {
  video: VideoData;
  index: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  onDelete: (id: number) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  video, 
  index, 
  onInputChange, 
  onDelete 
}) => {
  return (
    <Card className="bg-cyber-dark border border-cyber-light">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">
          <Input 
            name="title"
            value={video.title}
            onChange={(e) => onInputChange(e, index)}
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
                onChange={(e) => onInputChange(e, index)}
                className="bg-cyber-dark border-cyber-light text-white text-sm h-8"
                placeholder="YouTube URL or ID"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Thumbnail URL (optional)</label>
              <Input
                name="thumbnail"
                value={video.thumbnail}
                onChange={(e) => onInputChange(e, index)}
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
            onChange={(e) => onInputChange(e, index)}
            className="bg-cyber-dark border-cyber-light text-white"
            placeholder="Video description"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="destructive" 
          size="sm"
          onClick={() => onDelete(video.id)}
          className="ml-auto"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
