
import React from 'react';
import { Mail, MessageCircle, Palette, Rocket, HeadphonesIcon, Timer, Users, Shield } from 'lucide-react';

const Home = () => {
  const handleContactClick = () => {
    window.open('mailto:your@email.com?subject=Let\'s work together!', '_blank');
  };

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

  const sellingPoints = [
    {
      icon: Timer,
      title: "Fast Delivery",
      description: "I work quickly without compromising quality. Expect fast turnarounds tailored to your timeline."
    },
    {
      icon: Users,
      title: "Partnered with a Professional Designer",
      description: "Collaborating with an experienced UI/UX designer to ensure your site looks and feels amazing."
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "Need help or updates? I'm available and responsive — no ghosting, just honest communication and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="text-primary dark:text-red-400">Gelo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              A part-time full-stack developer at a tech company and a freelance website builder. 
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

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My streamlined process ensures we stay aligned and deliver exactly what you need
            </p>
          </div>

          {/* Desktop Layout - Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-border"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Step Number Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-background dark:bg-background rounded-full flex items-center justify-center border border-border">
                          <step.icon className="w-8 h-8 text-primary dark:text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
                className="bg-background dark:bg-background p-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-border"
              >
                <div className="flex items-start space-x-4">
                  {/* Step Number */}
                  <div className="w-10 h-10 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-background dark:bg-background rounded-full flex items-center justify-center border border-border">
                        <step.icon className="w-6 h-6 text-primary dark:text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingPoints.map((point, index) => (
              <div
                key={point.title}
                className="bg-background dark:bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary dark:bg-primary rounded-full flex items-center justify-center mb-6">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
