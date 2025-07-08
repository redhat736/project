import React from 'react';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { openLightbox } = useLightbox();
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      description: "Streamlit-based app for managing food orders like Zomato with intuitive user interface and real-time order tracking.",
      tech: ["Streamlit", "Python", "Pandas"],
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/",
      demo: "#",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 2,
      title: "SMS Sender with Python",
      description: "Python script that automates SMS delivery with scheduling features and delivery status tracking.",
      tech: ["Python", "Twilio API", "Flask"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/",
      demo: "#",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Phone Call Automation",
      description: "Python tool to trigger automated voice calls with customizable messages and call scheduling functionality.",
      tech: ["Python", "Docker", "REST API"],
      image: "https://images.pexels.com/photos/33999/pexels-photo-33999.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/",
      demo: "#",
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className={`py-20 bg-${currentTheme.background} perspective`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-${currentTheme.text} mb-4 hover-3d`}>My Projects</h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${currentTheme.primary} mx-auto animate-pulse-3d`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`bg-${currentTheme.background} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} hover-3d transform-3d animate-on-scroll-3d`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative group perspective">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105 hover-tilt"
                  onClick={() => openLightbox(project.image, project.title)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full animate-float-3d">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold text-${currentTheme.text} mb-3 hover-tilt`}>{project.title}</h3>
                <p className={`text-${theme === 'dark' ? 'gray-300' : 'gray-600'} mb-4 leading-relaxed`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${currentTheme.primary} bg-opacity-10 text-${currentTheme.accent} rounded-full text-sm font-medium hover-scale-3d`}
                      style={{animationDelay: `${techIndex * 0.1}s`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-${theme === 'dark' ? 'gray-700' : 'gray-100'} text-${theme === 'dark' ? 'gray-300' : 'gray-700'} rounded-lg hover:bg-${theme === 'dark' ? 'gray-600' : 'gray-200'} transition-all duration-200 hover-3d`}
                  >
                    <Github size={16} className="animate-float" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${currentTheme.primary} text-white rounded-lg hover:opacity-90 transition-all duration-200 hover-scale-3d`}
                  >
                    <ExternalLink size={16} className="animate-bounce-3d" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;