
import React from 'react';
import { VideoData } from '@/types/youtube';
import VideoCard from './VideoCard';

interface VideoListProps {
  videos: VideoData[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  onDeleteVideo: (id: number) => void;
}

const VideoList: React.FC<VideoListProps> = ({ 
  videos, 
  onInputChange, 
  onDeleteVideo 
}) => {
  if (videos.length === 0) {
    return <p className="text-gray-400 text-center py-4">No videos yet. Add your first video below!</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white">Current Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <VideoCard 
            key={video.id}
            video={video}
            index={index}
            onInputChange={onInputChange}
            onDelete={onDeleteVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
