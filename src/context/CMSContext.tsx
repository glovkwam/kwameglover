import React, { createContext, useContext, useState, ReactNode } from 'react';
import { VideoData } from '@/types/youtube';

export interface CMSContextType {
  isCmsOpen: boolean;
  currentSection: string;
  openCMS: (section: string) => void;
  closeCMS: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [isCmsOpen, setIsCmsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const openCMS = (section: string) => {
    setCurrentSection(section);
    setIsCmsOpen(true);
  };

  const closeCMS = () => {
    setIsCmsOpen(false);
  };

  return (
    <CMSContext.Provider 
      value={{ 
        isCmsOpen, 
        currentSection,
        openCMS, 
        closeCMS,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
