import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGit,
  FaPython,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiDotnet, SiFlask, SiMongodb, SiMysql, SiFirebase, SiDocker, SiOracle, SiGooglecloud, SiMaterialdesign } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Java", icon: <FaJava/>, color: "#007396" },
  { name: "C#", icon: <SiDotnet/>, color: "#239120" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Flask", icon: <SiFlask/>, color: "#47A248" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Material UI", icon: <SiMaterialdesign/>, color: "#007FFF" },
  { name: "Git", icon: <FaGit />, color: "#F05032" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "GCP", icon: <SiGooglecloud/>, color: "#4285F4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFA611" },
  { name: "Oracle", icon: <SiOracle />, color: "#F80000" },
  { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen flex flex-col items-center px-4 md:px-32 relative pt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 right-20 w-64 h-64 bg-purple-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <div
          className="absolute bottom-40 left-20 w-64 h-64 bg-teal-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        {/* Heading Section */}
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
            className="font-extrabold text-4xl md:text-6xl mb-4 relative"
          >
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-teal-400 via-purple-500 to-teal-400
                        animate-gradient-x"
            >
              Skills
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
            Technologies I Work With
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 
                   w-full max-w-6xl mx-auto px-4 md:px-0"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 
                         rounded-xl blur-sm opacity-0 group-hover:opacity-100 
                         transition-opacity duration-300"
              />
              <div
                className="relative flex flex-col items-center p-6 rounded-xl 
                         bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                         hover:border-gray-700 transition-all duration-300"
              >
                <motion.div
                  className="text-4xl md:text-5xl mb-4"
                  style={{ color: skill.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <p className="text-gray-300 font-light text-sm md:text-base">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
