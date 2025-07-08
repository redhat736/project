import React from 'react';
import { X } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

const Lightbox = () => {
  const { isOpen, imageSrc, imageAlt, closeLightbox } = useLightbox();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>
        
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        
        {imageAlt && (
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <p className="text-lg font-semibold">{imageAlt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;