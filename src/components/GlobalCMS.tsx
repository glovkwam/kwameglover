
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Save } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';
import YouTubeCMS from './YouTubeCMS';
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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
      case 'picow':
        return (
          <div className="p-4">
            <h3 className="text-xl font-semibold text-cyber-accent mb-4">Pico W Projects Content Manager</h3>
            <p className="mb-4 text-gray-300">Edit your Pico W project content here. Changes will be saved to your browser's local storage.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
                <Input 
                  defaultValue="Interactive LED Installation" 
                  className="bg-cyber-dark border-cyber-light text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                <Textarea 
                  defaultValue="An interactive LED installation that responds to movement and sound in the environment, creating an immersive experience that bridges the digital and physical worlds." 
                  className="bg-cyber-dark border-cyber-light text-white min-h-24"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Repository URL</label>
                <Input 
                  defaultValue="https://github.com/" 
                  className="bg-cyber-dark border-cyber-light text-white"
                />
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <Button variant="outline" onClick={closeCMS}>
                  Cancel
                </Button>
                <Button 
                  onClick={() => {
                    toast({
                      title: "Pico W Content Updated",
                      description: "Your Pico W project content has been updated.",
                    });
                    closeCMS();
                  }}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
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
            {currentSection === 'youtube' ? 'YouTube Content Manager' : 
             currentSection === 'picow' ? 'Pico W Projects Manager' : 
             'Content Manager'}
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
