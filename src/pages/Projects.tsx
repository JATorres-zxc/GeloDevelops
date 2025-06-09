
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring secure payment processing through Stripe, real-time inventory management, user authentication, shopping cart functionality, and a powerful admin dashboard for managing products, orders, and customers. The platform includes responsive design, search functionality, product filtering, and email notifications.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and analytics.',
      longDescription: 'A powerful task management application designed for teams, featuring real-time collaboration through WebSocket connections, drag-and-drop task organization, time tracking, project analytics, team member management, and customizable workflows. The app includes notification systems, file attachments, and detailed reporting dashboards.',
      techStack: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.',
      longDescription: 'An interactive weather dashboard that provides comprehensive weather information including current conditions, 7-day forecasts, historical weather data, and beautiful data visualizations. Features include geolocation-based weather detection, multiple location management, weather alerts, UV index tracking, and interactive charts showing temperature, humidity, and precipitation trends.',
      techStack: ['React', 'Python', 'FastAPI', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
      longDescription: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations, optimized performance, and clean design. Built with accessibility in mind, featuring dark/light mode toggle, smooth scrolling, lazy loading images, SEO optimization, and contact form integration. The site includes project galleries, testimonials, and a blog section.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project4',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleImageClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate 
            my skills across different technologies and domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div key={project.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard 
                {...project} 
                onImageClick={() => handleImageClick(project)}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <button
            onClick={() => window.open('mailto:gelodevelops@gmail.com?subject=Let\'s discuss a project!', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
