import React from 'react';
import TechStack from '../components/TechStack';
import { Shield, Zap, Briefcase } from 'lucide-react';

const About = () => {
  const traits = [
    {
      icon: Shield,
      title: "Reliable & Responsive",
      description: "I take deadlines seriously, keep you updated, and respond quickly — no ghosting."
    },
    {
      icon: Zap,
      title: "Flexible & Adaptable",
      description: "Whether you have a full spec or just an idea, I can work with what you have and help shape your vision."
    },
    {
      icon: Briefcase,
      title: "Professional Experience + Freelance Agility",
      description: "I bring real-world dev experience from a tech company and the flexibility and speed of a freelancer."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
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

      {/* Why Work With Me Section */}
      <div className="mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Why Work With Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I combine hands-on experience as a part-time full-stack developer at a tech company 
            with a passion for freelance web development. I value clear communication, reliability, 
            and building long-term client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 dark:bg-red-400/10 rounded-full flex items-center justify-center">
                  <trait.icon className="w-8 h-8 text-primary dark:text-red-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {trait.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
