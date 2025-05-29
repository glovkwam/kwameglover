
export interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
}

export interface YouTubeCMSProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideos: VideoData[];
  onSave: (videos: VideoData[]) => void;
}
