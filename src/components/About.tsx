import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="about" className={`py-20 bg-${currentTheme.surface} perspective`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-${currentTheme.text} mb-4 hover-3d`}>About Me</h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${currentTheme.primary} mx-auto animate-pulse-3d`}></div>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* 3D Avatar for About Section */}
            <div className="flex justify-center lg:justify-start mb-8 perspective">
              <div className={`w-24 h-24 bg-gradient-to-br ${currentTheme.secondary} rounded-full flex items-center justify-center shadow-lg hover-scale-3d transform-3d animate-morph-3d`}>
                <span className="text-2xl font-bold text-white">RR</span>
              </div>
            </div>

            <div className={`bg-${currentTheme.background} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-tilt transform-3d`}>
              <div className="flex items-center mb-6">
                <User className={`w-8 h-8 text-${currentTheme.accent} mr-3 animate-float`} />
                <h3 className={`text-2xl font-semibold text-${currentTheme.text}`}>Who I Am</h3>
              </div>
              <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} text-lg leading-relaxed`}>
                My name is Rahul Rawat. A dedicated and enthusiastic learner with a commitment to excellence. 
                I enjoy problem-solving, teamwork, and constant growth in tech. Currently pursuing B.Tech in 
                Information Technology, I'm passionate about building innovative solutions and contributing to 
                the digital transformation of tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`bg-${currentTheme.background} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-3d transform-3d`}>
                <MapPin className={`w-6 h-6 text-${currentTheme.accent} mb-3 animate-bounce-3d`} />
                <h4 className={`font-semibold text-${currentTheme.text} mb-2`}>Location</h4>
                <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>Ajmer, Rajasthan, India</p>
              </div>
              
              <div className={`bg-${currentTheme.background} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-3d transform-3d`}>
                <Mail className={`w-6 h-6 text-${currentTheme.accent} mb-3 animate-float`} />
                <h4 className={`font-semibold text-${currentTheme.text} mb-2`}>Email</h4>
                <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>rajrawat7108@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="relative perspective">
            <div className={`bg-gradient-to-br ${currentTheme.secondary} rounded-2xl p-8 text-white hover-tilt transform-3d`}>
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center animate-slide-in-3d" style={{animationDelay: '0.1s'}}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse-3d"></div>
                  <span>3rd Year IT Engineering Student</span>
                </div>
                <div className="flex items-center animate-slide-in-3d" style={{animationDelay: '0.2s'}}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse-3d"></div>
                  <span>Passionate about AI & Machine Learning</span>
                </div>
                <div className="flex items-center animate-slide-in-3d" style={{animationDelay: '0.3s'}}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse-3d"></div>
                  <span>Experienced in Python & Docker</span>
                </div>
                <div className="flex items-center animate-slide-in-3d" style={{animationDelay: '0.4s'}}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse-3d"></div>
                  <span>Always eager to learn new technologies</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/20 rounded-lg backdrop-blur-sm hover-scale-3d">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 animate-float" />
                  <span>+91 89050 61188</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;