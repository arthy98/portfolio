import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col items-center pl-28 pr-6 md:px-32 relative pt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 
                     rounded-full mix-blend-multiply filter blur-xl animate-blob"
        />
        <div
          className="absolute top-60 right-20 w-64 h-64 bg-teal-500/10 
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
            About Me
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
          Let me tell you my story
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full relative">
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed
                   font-light tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          Hello! My name is Arthy and I am a dedicated software developer with
          expertise in full-stack development and a passion for creating
          user-friendly, efficient applications. I enjoy collaborating with
          teams, mentoring talent, and exploring innovative technologies to
          build impactful digital solutions. With experience on developer roles,
          I bring strong technical and interpersonal skills to every project.
          Outside of work, I draw inspiration from travel and new experiences,
          always striving for continuous learning and growth.!
        </motion.p>
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0.8, rotate: -10 }
          }
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-500/20 
                 rounded-full blur-3xl animate-pulse-slow"
          ></div>

          <div className="relative">
            <div className="w-64 h-64 md:w-96 md:h-96 relative">
              {/* Gradient border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 
                rounded-hexagon animate-border-pulse"
              />
              {/* Dark background */}
              <div className="absolute inset-1 bg-gray-900 rounded-hexagon" />
              {/* Image - Added object-position: top */}
              <img
                src="/IMG_2308.jpg"
                alt="Profile"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] 
             rounded-hexagon object-cover object-top 
             hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative elements remain the same */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
