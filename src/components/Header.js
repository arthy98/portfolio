import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  if (!mounted) return null;

  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      <motion.button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full 
               bg-gray-200 dark:bg-gray-800 
               text-gray-800 dark:text-gray-200
               hover:bg-gray-300 dark:hover:bg-gray-700
               transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 
                     bg-purple-500/20 dark:bg-purple-500/10 rounded-full 
                     mix-blend-multiply dark:mix-blend-screen filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-72 h-72 
                     bg-teal-500/20 dark:bg-teal-500/10 rounded-full 
                     mix-blend-multiply dark:mix-blend-screen filter blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6
                       bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400
                       dark:from-teal-300 dark:via-purple-400 dark:to-teal-300
                       text-transparent bg-clip-text
                       hover:from-purple-500 hover:via-teal-400 hover:to-purple-500
                       transition-all duration-300"
            >
              Arthy Umapathy
            </motion.h1>
            <motion.div
              className="h-1 w-40 mx-auto mb-8
                       bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400
                       dark:from-teal-300 dark:via-purple-400 dark:to-teal-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8
                     max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Developer Engineer | Full Stack Developer | Innovator
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-teal-400 to-purple-500
                       dark:from-teal-300 dark:to-purple-400
                       text-white dark:text-gray-900 rounded-full font-semibold
                       hover:shadow-lg hover:shadow-teal-500/50 dark:hover:shadow-teal-300/50
                   transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-teal-400 dark:border-teal-300
                       text-teal-400 dark:text-teal-300 rounded-full font-semibold
                       hover:bg-teal-400/10 dark:hover:bg-teal-300/10
                   transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full 
                       flex justify-center items-start p-1"
          >
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
