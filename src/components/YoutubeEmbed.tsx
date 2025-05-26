
import React from "react";

interface YoutubeEmbedProps {
  embedId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId, title = "Embedded youtube" }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1&origin=${window.location.origin}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={title}
      style={{ pointerEvents: 'auto' }}
    />
  </div>
);

export default YoutubeEmbed;
