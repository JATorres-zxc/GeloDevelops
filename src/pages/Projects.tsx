
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: 'Work Portfolio',
      description: 'A sleek, responsive portfolio website showcasing my projects, skills, and experience as a developer.',
      longDescription: 'This portfolio website is a modern, fully responsive platform I built to highlight my work as a developer. It features a clean, intuitive design and includes detailed showcases of my major projects, categorized by technology and domain. The site also presents my technical skills, resume, and contact information, providing visitors with a clear and professional overview of who I am and what I do. Built with performance and accessibility in mind, the website demonstrates both my front-end and back-end capabilities, serving as a central hub for potential collaborators, employers, or clients to learn more about me.',
      techStack: ['NextJS', 'Node.js'],
      liveUrl: 'https://john-angelo-torres-nextjs-portfolio.vercel.app/',
      githubUrl: 'https://github.com/JATorres-zxc/John-Angelo-Torres',
      imageUrl: '/images/portfolio.png'
    },
    {
      name: 'SynapseAI',
      description: 'A MERN real-time chat app with secure messaging and AI chatbot WIP.',
      longDescription: 'SynapseAI is a modern real-time chat application built with the MERN stack, designed to provide secure, fast, and user-friendly messaging. It features real-time communication using Socket.IO, secure authentication via JWT and cookies, file uploads with size limits, and a responsive interface. An AI-powered chatbot is currently in development to enhance the user experience with intelligent responses and assistance. Deployed using Vercel for the frontend and Render for the backend, this project demonstrates practical implementation of full-stack development with a focus on real-time and AI capabilities.',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: 'https://synapse-ai-lilac.vercel.app/',
      githubUrl: 'https://github.com/JATorres-zxc/SynapseAI',
      imageUrl: '/images/chatapp1.png'
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
            onClick={() => {
              const user = 'gelodevelops';
              const domain = 'gmail.com';
              const email = `${user}@${domain}`;
              const subject = "Let's discuss a project!";
              window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}`, '_blank');
            }}
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
