
import React from 'react';
import TechStack from '../components/TechStack';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Building Digital Solutions That Matter
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I specialize in building robust, scalable, and beautiful web applications. 
              With experience across the full stack, I work with both startups and 
              individuals to craft impactful digital solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As a part-time developer at a tech company, I bring enterprise-level 
              expertise to my freelance projects. I'm passionate about clean code, 
              user experience, and delivering results that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or helping fellow developers 
              in the community.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Technologies I Work With
              </h3>
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
