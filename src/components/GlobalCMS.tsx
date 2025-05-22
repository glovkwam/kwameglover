
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Save } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import YouTubeCMS from './YouTubeCMS';
import { useToast } from "@/hooks/use-toast";

const GlobalCMS = () => {
  const { isCmsOpen, currentSection, closeCMS } = useCMS();
  const { toast } = useToast();
  const [mountedSection, setMountedSection] = useState('');

  useEffect(() => {
    if (isCmsOpen) {
      setMountedSection(currentSection);
    }
  }, [isCmsOpen, currentSection]);

  if (!isCmsOpen) return null;

  const renderCMSContent = () => {
    switch (mountedSection) {
      case 'youtube':
        // Get saved videos from localStorage
        const savedVideos = localStorage.getItem('youtube-videos');
        const initialVideos = savedVideos ? JSON.parse(savedVideos) : [];
        
        return (
          <YouTubeCMS 
            isOpen={true}
            onClose={closeCMS}
            initialVideos={initialVideos}
            onSave={(videos) => {
              localStorage.setItem('youtube-videos', JSON.stringify(videos));
              toast({
                title: "YouTube Content Updated",
                description: `Your video collection has been updated with ${videos.length} videos.`,
              });
              closeCMS();
            }}
          />
        );
      // Future sections can be added here
      default:
        return (
          <div className="p-6 text-center">
            <p>No content management available for this section yet.</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-cyber-dark p-6 rounded-lg border border-cyber-accent shadow-[0_0_15px_rgba(0,246,255,0.3)] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-accent">
            {currentSection === 'youtube' ? 'YouTube Content Manager' : 'Content Manager'}
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-cyber-accent hover:bg-transparent"
            onClick={closeCMS}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {renderCMSContent()}
      </div>
    </div>
  );
};

export default GlobalCMS;
