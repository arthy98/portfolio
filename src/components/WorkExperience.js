import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -200px 0px",
  });

  const experiences = [
    {
      company: "Amazon",
      role: "Software Developer Engineer II",
      duration: "April 2022 - Present",
      details: [
        "Led technical design and development of an AWS-based integrator using C#.NET and Java.",
        "Developed a ReactJS based web application for tracking and retrying failed transactions.",
        "Led an initiative to migrate 15+ customization codes from high-risk legacy systems to Amazon's internal code repository using Java.",
        "Collaborated with cross-functional teams to align on customer requirements and developed backend web services for a user onboarding project.",
        "Introduced automated monitoring via a Quick Sight dashboard, reducing manual efforts from 3 days to 1 day.",
      ],
    },
    {
      company: "Cognizant",
      role: "Software Developer",
      duration: "April 2022 - September 2022",
      details: [
        "Worked and trained in Guidewire software, a cloud-based insurance software enabling businesses to streamline processes.",
        "Expanded and enhanced insurance client application and improved overall performance and market value by 25%.",
        "Compiled and provided feedback for various modules after complete analysis of the existing components within the project.",
      ],
    },
    {
      company: "Canada Revenue Agency",
      role: "Full Stack Developer",
      duration: "January 2022 - April 2022",
      details: [
        "Worked as a full stack developer for an application that calculates amounts based on the tax information provided by an organization.",
        "Developed RESTful web services to perform various operations within the project.",
        "Designed and developed different client-side modules and key features using Java along with swing framework.",
        "Worked on writing test cases for the entire application using Junit framework and raised code coverage from 0% to 85%.",
      ],
    },
    {
      company: "Accenture",
      role: "Full Stack Developer Intern",
      duration: "August 2019 - November 2019",
      details: [
        "Trained in concept-based programs (file handling, database connectivity) using core Java on Eclipse oxygen.",
        "Designed mini online transaction processing service using procedural languages by preserving data concurrency and consistency in a multi user environment."
      ],
    },
    {
      company: "Infosys",
      role: "Full Stack Developer Intern",
      duration: "January 2019 - May 2019",
      details: [
        "Designed and developed dynamic web pages and web forms using NodeJS and React framework.",
        "Worked on creating a rich user interface using HTML 5, CSS, JavaScript, Bootstrap, MDBReact Frameworks.",
        "Implemented server-side, client-side data validation using validation controls and preserved JSON Web Token."
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="workexperience"
      className="min-h-screen flex flex-col items-center px-4 md:px-32 relative pt-20"
    >
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
              Work Experience
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
            Where I've worked
          </motion.p>
        </motion.div>

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

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company names list */}
            <div className="md:w-48 w-full overflow-x-auto">
              <div className="flex md:flex-col flex-row md:space-y-2 space-x-4 md:space-x-0">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 text-left whitespace-nowrap transition-all duration-300
                   hover:text-teal-600 hover:bg-gray-200/50 
                   dark:hover:text-teal-400 dark:hover:bg-gray-800/50 
                   rounded
                   ${
                     activeTab === index
                       ? "text-teal-600 bg-gray-200/50 dark:text-teal-400 dark:bg-gray-800/50"
                       : "text-gray-600 dark:text-gray-400"
                   }`}
                  >
                    {exp.company}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Experience details */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {experiences[activeTab].role}{" "}
                  <span className="text-teal-600 dark:text-teal-400">
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {experiences[activeTab].duration}
                </p>
                <ul className="space-y-4">
                  {experiences[activeTab].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-teal-600 dark:text-teal-400 mt-1.5">
                        ▹
                      </span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
