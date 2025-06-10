
import React from 'react';
import { Mail } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    const user = 'gelodevelops';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;
    window.open(`mailto:${email}?subject=Let's work together!`, '_blank');
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary dark:from-gray-800 to-white dark:to-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="text-primary dark:text-red-400">Gelo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            A full-stack developer and a freelance website builder. 
            I can bring your ideas to life with <span className="text-primary dark:text-red-400 font-medium">fast, high-quality websites</span> tailored to your needs.
          </p>
          
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-primary dark:bg-red-600 text-white font-medium rounded-lg hover:bg-primary-light dark:hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </button>
        </div>
        
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="w-24 h-1 bg-primary dark:bg-red-400 mx-auto rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
