import React from 'react';
import { Code, Brain, Server, Database, Globe, Github as Git } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Artificial Intelligence", level: 80 },
        { name: "Data Analysis", level: 75 },
        { name: "Deep Learning", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 bg-${currentTheme.surface} perspective`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-${currentTheme.text} mb-4 hover-3d`}>Skills & Technologies</h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${currentTheme.primary} mx-auto animate-pulse-3d`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-${currentTheme.background} rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-3d transform-3d animate-on-scroll-3d`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${currentTheme.primary} text-white p-3 rounded-lg mr-4 animate-rotate-3d`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold text-${currentTheme.text} hover-tilt`}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 animate-slide-in-3d" style={{animationDelay: `${skillIndex * 0.1}s`}}>
                    <div className="flex justify-between items-center">
                      <span className={`text-${theme === 'dark' ? 'gray-300' : 'gray-700'} font-medium hover-tilt`}>{skill.name}</span>
                      <span className={`text-${currentTheme.accent} font-semibold animate-pulse-3d`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full bg-${theme === 'dark' ? 'gray-700' : 'gray-200'} rounded-full h-2 perspective`}>
                      <div
                        className={`bg-gradient-to-r ${currentTheme.primary} h-2 rounded-full transition-all duration-1000 ease-out hover-scale-3d`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills with 3D Effects */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-bold text-${currentTheme.text} mb-8 hover-3d`}>Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Problem Solving", "Team Collaboration", "Project Management", "Critical Thinking", "Communication", "Adaptability"].map((skill, index) => (
              <span
                key={index}
                className={`px-6 py-3 bg-${currentTheme.background} text-${theme === 'dark' ? 'gray-300' : 'gray-700'} rounded-full shadow-md hover:shadow-lg transition-all duration-200 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover-scale-3d animate-float-3d`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;