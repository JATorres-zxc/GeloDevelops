
import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 GeloDevelops. All rights reserved.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/john-angelo-torres-75b561349/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/JATorres-zxc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/johnangelo.torres.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
