import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building intelligent solutions and automating the future, one line of code at a time.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradient} opacity-90`}></div>
      
      {/* 3D Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-float-3d"
            style={{
              width: Math.random() * 8 + 6 + 'px',
              height: Math.random() * 8 + 6 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 4 + 6 + 's'
            }}
          />
        ))}
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 animate-rotate-3d transform-3d" 
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-white/15 rounded-full animate-pulse-3d"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-white/10 animate-morph-3d"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-white/12 animate-bounce-3d"
             style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* 3D Avatar Circle */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
            />
          </div>

          <div className="space-y-4 animate-on-scroll-3d">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up transform-3d">
              <span className="block hover-tilt">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hover-3d">
                Rahul Rawat
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl font-light h-16 flex items-center justify-center">
              <span className="border-r-2 border-white animate-pulse pr-1 transform-3d">
                {displayText}
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-float">
              IT Engineering Student | Fresher | Open to Internships
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center perspective">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover-scale-3d">
              <Download size={20} />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover-tilt"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover-tilt"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-3d hover-3d"
        >
          <ArrowDown size={32} className="text-white/80" />
        </button>
      </div>
    </section>
  );
};

export default Hero;