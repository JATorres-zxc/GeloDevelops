
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-semibold text-primary dark:text-red-400 hover:text-primary-light transition-colors">
            Your Name
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors ${isActive('/') ? 'text-primary dark:text-red-400 font-medium' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors ${isActive('/about') ? 'text-primary dark:text-red-400 font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors ${isActive('/projects') ? 'text-primary dark:text-red-400 font-medium' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors ${isActive('/contact') ? 'text-primary dark:text-red-400 font-medium' : ''}`}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
