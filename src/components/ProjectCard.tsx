
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  onImageClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
  liveUrl,
  githubUrl,
  imageUrl,
  onImageClick
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 p-6 hover:transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{name}</h3>
        
        {imageUrl && (
          <div 
            className="mb-4 cursor-pointer rounded-lg overflow-hidden shadow-sm"
            onClick={onImageClick}
          >
            <img 
              src={imageUrl} 
              alt={`${name} preview`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-primary dark:bg-red-600 text-white rounded-lg hover:bg-primary-light dark:hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
