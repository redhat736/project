import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Qualifications = () => {
  const qualifications = [
    {
      degree: "B.Tech in Information Technology",
      institution: "BTU University, Ajmer",
      year: "2022 - Present",
      status: "3rd Year",
      description: "Currently pursuing Bachelor's degree in Information Technology with focus on software development and emerging technologies."
    },
    {
      degree: "12th Grade",
      institution: "KK Sr. Sc. School, Ajmer",
      year: "2022",
      status: "Completed",
      description: "Completed higher secondary education with strong foundation in mathematics and science."
    },
    {
      degree: "10th Grade",
      institution: "KK Sr. Sc. School, Ajmer",
      year: "2020",
      status: "Completed",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="qualifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {qualifications.map((qual, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                }`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-purple-600 mr-3" />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        qual.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {qual.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{qual.degree}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{qual.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{qual.year}</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{qual.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
