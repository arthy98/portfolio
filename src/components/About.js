import React, { memo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleXVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const profileImageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

// Memoized components
const BackgroundBlobs = memo(() => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
    <div className="absolute top-60 right-20 w-64 h-64 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
  </div>
));

const ProfileImage = memo(() => (
  <motion.div
    className="flex justify-center relative px-4 md:px-0"
    initial="hidden"
    animate="visible"
    variants={profileImageVariants}
    transition={{ duration: 1.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-purple-600/20 dark:from-teal-400/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="relative">
      <div className="w-64 h-64 md:w-96 md:h-96 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-hexagon animate-border-pulse" />
        <div className="absolute inset-1 bg-gray-900 rounded-hexagon" />
        <img
          src="/IMG_2308.jpg"
          alt="Profile"
          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-hexagon object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <FloatingDots />
    </div>
  </motion.div>
));

const FloatingDots = memo(() => (
  <>
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
  </>
));

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-32 relative pt-20 pb-10"
    >
      <BackgroundBlobs />
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 1 }}
          className="w-full text-center mb-20 relative"
        >
          <motion.h2
            variants={titleVariants}
            transition={{ duration: 0.8 }}
            className="font-extrabold text-4xl md:text-6xl mb-4 relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 animate-gradient-x">
              About Me
            </span>
            <motion.div
              variants={scaleXVariants}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-teal-400 to-purple-500"
            />
          </motion.h2>
          <motion.p
            variants={titleVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-lg font-light"
          >
            Let me tell you my story
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          <motion.p
            className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light tracking-wide text-center md:text-left px-4 md:px-0"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            Hello! My name is Arthy and I am a dedicated software developer with
            expertise in full-stack development and a passion for creating
            user-friendly, efficient applications. I enjoy collaborating with
            teams, mentoring talent, and exploring innovative technologies to
            build impactful digital solutions. With experience on developer
            roles, I bring strong technical and interpersonal skills to every
            project. Outside of work, I draw inspiration from travel and new
            experiences, always striving for continuous learning and growth!
          </motion.p>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
