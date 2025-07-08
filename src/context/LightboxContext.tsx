import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LightboxContextType {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

interface LightboxProviderProps {
  children: ReactNode;
}

export const LightboxProvider: React.FC<LightboxProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImageSrc('');
    setImageAlt('');
  };

  return (
    <LightboxContext.Provider value={{ isOpen, imageSrc, imageAlt, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  );
};