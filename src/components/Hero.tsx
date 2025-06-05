
import React from 'react';
import { Mail } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    window.open('mailto:your@email.com?subject=Let\'s work together!', '_blank');
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            A part-time full-stack developer at a tech company and a freelance website builder. 
            I can bring your ideas to life with <span className="text-primary font-medium">fast, high-quality websites</span> tailored to your needs.
          </p>
          
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </button>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
