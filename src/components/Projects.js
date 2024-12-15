import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const projects = [
    {
      title: "Dalhousie Hockey League (DHL) System",
      description: "A Hockey Game Simulation System built on JAVA .",
      techStack: ["Java", "API"],
      link: "#",
      github: "#",
    },
    {
      title: "Restrainer",
      description: "A Detox Android Application based on Usability Heuristics and used Android packages.",
      techStack: ["Kotlin", "MongoDB", "MySQL", "Typescript", "JavaScript", "Python"],
      link: "#",
      github: "#",
    },
    {
      title: "Rentickly",
      description: "Rental Application using React Js and Flask along with MySQL Database.",
      techStack: ["React", "API", "Flask", "Python", "AWS RDS", "Google Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "DAL Serverless LMS",
      description: "A Multi-Cloud based Serverless Learning Management System.",
      techStack: ["GCP Pub/Sub", "AWS LEX", "AWS Sage Maker", "AWS Comprehend"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my work and skills.",
      techStack: ["React", "Tailwind CSS", "CSS", "AOS", "Material UI"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex flex-col items-center pl-28 pr-6 md:px-32 relative pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <div
          className="absolute bottom-40 right-20 w-64 h-64 bg-teal-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full text-center mb-20 relative"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-32 h-32 bg-gradient-to-r from-teal-500/20 to-purple-500/20 
                   rounded-full blur-2xl"
        />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-5xl md:text-6xl mb-4 relative"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-teal-400 via-purple-500 to-teal-400
                        animate-gradient-x"
          >
            Projects
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                     h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-500"
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg font-light"
        >
          Some Things I've Built
        </motion.p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
            className="group relative"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 
                         rounded-xl blur-sm opacity-50 group-hover:opacity-100 
                         transition-opacity duration-300"
            />
            <div
              className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl 
                         border border-gray-800 hover:border-gray-700 
                         transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="text-xl font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-teal-400 to-purple-500"
                >
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <p className="text-gray-300 font-light mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.1 + 1,
                    }}
                    className="text-sm px-3 py-1 rounded-full 
                           bg-gradient-to-r from-teal-400/10 to-purple-500/10 
                           text-gray-300 font-light border border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
