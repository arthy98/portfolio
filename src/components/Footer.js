import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-center text-text">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-primary" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl hover:text-primary" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl hover:text-primary" />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Arthy Umapathy. All rights reserved.</p>
    </footer>
  );
};
export default Footer;