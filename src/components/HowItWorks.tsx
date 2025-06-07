
import React from 'react';
import { MessageCircle, Palette, Rocket, HeadphonesIcon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Discovery Call",
      description: "We'll have a quick chat to discuss your needs, goals, and ideas — this helps me understand your vision and what you're trying to achieve."
    },
    {
      number: 2,
      icon: Palette,
      title: "Design & Develop",
      description: "I start designing and coding the website, sharing progress along the way and adjusting based on your feedback. Collaboration is key."
    },
    {
      number: 3,
      icon: Rocket,
      title: "Launch",
      description: "Once everything is approved, I deploy the site to your preferred hosting platform and make it live for the world to see."
    },
    {
      number: 4,
      icon: HeadphonesIcon,
      title: "Support",
      description: "I provide post-launch help — whether it's small updates, fixes, or guidance. You won't be left in the dark after launch."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My streamlined process ensures we stay aligned and deliver exactly what you need
          </p>
        </div>

        {/* Desktop Layout - Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-primary dark:bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary dark:text-red-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Cards */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                {/* Step Number */}
                <div className="w-10 h-10 bg-primary dark:bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary dark:text-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
