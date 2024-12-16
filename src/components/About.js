import React, { memo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
          <motion.div
            className="flex flex-col space-y-6 text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light tracking-wide text-center md:text-left px-4 md:px-0"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl font-medium bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                Hello! I'm Arthy
              </span>{" "}
              — a dedicated software developer passionate about creating
              user-friendly, efficient applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="relative"
            >
              As an{" "}
              <a
                href="https://www.credly.com/badges/75084134-7265-431b-ac7b-282eca662f56/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block group"
              >
                <span className="text-teal-400 hover:text-purple-400 transition-colors duration-300 font-medium">
                  AWS Certified Solutions Architect
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              , I specialize in designing and implementing scalable cloud
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <p>My expertise extends to:</p>
              <ul className="list-none space-y-2 md:space-y-1">
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                  <span>Full-stack development with modern technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                  <span>Team collaboration and talent mentoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                  <span>Building impactful digital solutions</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="italic text-gray-400 dark:text-gray-500"
            >
              Outside of work, I draw inspiration from travel and new
              experiences, always striving for continuous learning and growth!
            </motion.p>
          </motion.div>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
