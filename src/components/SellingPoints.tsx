
import React from 'react';
import { Timer, Users, Shield } from 'lucide-react';

const SellingPoints = () => {
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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sellingPoints.map((point, index) => (
            <div
              key={point.title}
              className="bg-card dark:bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
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
  );
};

export default SellingPoints;
