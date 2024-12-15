import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer 
      className={`text-center transition-colors duration-300 py-6`}
    >
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://github.com/Arthy-Umapathy/Graduate_projects" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`transition-colors duration-300 ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-purple-400' 
              : 'text-gray-900 hover:text-purple-600'
          }`}
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/arthy-umapathy-3a6a26162/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-300 ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-purple-400' 
              : 'text-gray-900 hover:text-purple-600'
          }`}
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a 
          href="https://leetcode.com/u/Arthy_Umapathy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`transition-colors duration-300 ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-purple-400' 
              : 'text-gray-900 hover:text-purple-600'
          }`}
        >
          <SiLeetcode className="text-2xl" />
        </a>
      </div>
      <p className={`text-sm ${
        theme === 'dark' 
          ? 'text-gray-400' 
          : 'text-gray-800'
      }`}>
        &copy; {new Date().getFullYear()} Arthy Umapathy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
