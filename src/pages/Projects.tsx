
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
      techStack: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      name: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.',
      techStack: ['React', 'Python', 'FastAPI', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3'
    },
    {
      name: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate 
            my skills across different technologies and domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div key={project.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <button
            onClick={() => window.open('mailto:your@email.com?subject=Let\'s discuss a project!', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
