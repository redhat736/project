import React from 'react';
import { Briefcase, Star, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-8">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fresh Graduate</h3>
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                Actively Seeking Internships
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                As a fresh IT engineering graduate, I'm excited to begin my professional journey. 
                I'm actively seeking internship opportunities where I can apply my technical skills, 
                contribute to meaningful projects, and grow alongside experienced professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Eager to Learn</h4>
                  <p className="text-gray-600 text-sm">Passionate about acquiring new skills and technologies</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Growth Mindset</h4>
                  <p className="text-gray-600 text-sm">Committed to continuous improvement and excellence</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Ready to Contribute</h4>
                  <p className="text-gray-600 text-sm">Prepared to add value from day one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;