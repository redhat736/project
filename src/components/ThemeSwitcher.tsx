import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
    orange: 'bg-gradient-to-r from-orange-500 to-red-500',
    dark: 'bg-gradient-to-r from-gray-700 to-gray-900'
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-6 z-50 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale-3d animate-float-3d border border-gray-200"
        aria-label="Change theme"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme Panel */}
      {isOpen && (
        <div className="fixed top-20 right-20 z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-200 animate-slide-in-3d">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Choose Theme</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1 hover-scale-3d"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key as Theme);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover-3d ${
                  theme === key 
                    ? 'bg-gray-100 border-2 border-gray-300' 
                    : 'hover:bg-gray-50 border-2 border-transparent'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${themeColors[key as Theme]} shadow-md animate-pulse-3d`}></div>
                <span className="font-medium text-gray-700">{themeData.name}</span>
                {theme === key && (
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-bounce-3d"></div>
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Theme preference is saved automatically
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;