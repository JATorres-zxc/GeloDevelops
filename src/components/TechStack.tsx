
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Python', color: '#3776ab' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Vue.js', color: '#4FC08D' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Express.js', color: '#000000' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Postman', color: '#FF6C37' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-6 bg-card dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div 
            className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: tech.color }}
          >
            {tech.name.charAt(0)}
          </div>
          <span className="text-foreground font-medium text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
