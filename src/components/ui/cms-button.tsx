
import React from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import { useCMS } from '@/context/CMSContext';

interface CMSButtonProps {
  section: string;
  className?: string;
}

const CMSButton = ({ section, className }: CMSButtonProps) => {
  const { openCMS } = useCMS();

  return (
    <Button
      variant="outline" 
      className={`border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 ${className || ''}`}
      onClick={() => openCMS(section)}
    >
      <Settings className="mr-2 h-4 w-4" />
      Manage Content
    </Button>
  );
};

export default CMSButton;
