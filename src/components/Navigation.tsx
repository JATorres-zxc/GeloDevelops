
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-semibold text-primary hover:text-primary-light transition-colors">
            Your Name
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-600 hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-gray-600 hover:text-primary transition-colors ${isActive('/projects') ? 'text-primary font-medium' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-600 hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary">
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
