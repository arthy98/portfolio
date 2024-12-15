import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const experiences = [
    {
      company: "Amazon",
      role: "Software Developer Engineer II",
      duration: "2022 - Present",
      details: [
        "Led technical design and development of an AWS-based integrator using C#.NET and Java.",
        "Developed a ReactJS based web application for tracking and retrying failed transactions.",
        "Led an initiative to migrate 15+ customization codes from high-risk legacy systems to Amazon’s internal code repository using Java.",
        "Collaborated with cross-functional teams to align on customer requirements and developed backend web services for a user onboarding project.",
        "Introduced automated monitoring via a Quick Sight dashboard, reducing manual efforts from 3 days to 1 day."
      ],
    },
    {
      company: "Cognizant",
      role: "Software Developer",
      duration: "2022 - 2022",
      details: [
        "Worked and trained in Guidewire software, a cloud-based insurance software enabling businesses to streamline processes.",
        "Expanded and enhanced insurance client application and improved overall performance and market value by 25%.",
        "Compiled and provided feedback for various modules after complete analysis of the existing components within the project.",
      ],
    },
    {
      company: "Canada Revenue Agency",
      role: "Full Stack Developer",
      duration: "2021 - 2021",
      details: [
        "Worked as a full stack developer for an application that calculates amounts based on the tax information provided by an organization.",
        "Developed RESTful web services to perform various operations within the project.",
        "Designed and developed different client-side modules and key features using Java along with swing framework.",
        "Worked on writing test cases for the entire application using Junit framework and raised code coverage from 0% to 85%."
      ],
  },
  {
    company: "Infosys",
    role: "Full Stack Developer Intern",
    duration: "2019 - 2019",
    details: [
      "Worked as a full stack developer for an application that calculates amounts based on the tax information provided by an organization.",
      "Developed RESTful web services to perform various operations within the project.",
      "Designed and developed different client-side modules and key features using Java along with swing framework.",
      "Worked on writing test cases for the entire application using Junit framework and raised code coverage from 0% to 85%."
    ],
},
{
  company: "Accenture",
  role: "Full Stack Developer Intern",
  duration: "2019 - 2019",
  details: [
    "Worked as a full stack developer for an application that calculates amounts based on the tax information provided by an organization.",
    "Developed RESTful web services to perform various operations within the project.",
    "Designed and developed different client-side modules and key features using Java along with swing framework.",
    "Worked on writing test cases for the entire application using Junit framework and raised code coverage from 0% to 85%."
  ],
},
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen flex flex-col items-center pl-28 pr-6 md:px-32 relative pt-20"
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
          className="font-extrabold text-5xl md:text-6xl mb-4 relative"
        >
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-teal-400 via-purple-500 to-teal-400
                        animate-gradient-x"
          >
            Experience
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
          Where I've Worked
        </motion.p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto w-full bg-gray-900/50 backdrop-blur-sm 
                 rounded-2xl p-8 shadow-xl border border-gray-800"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col md:w-1/3 space-x-4 md:space-x-0 md:space-y-4">
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left px-6 py-3 rounded-lg transition-all duration-300
                          ${
                            activeTab === index
                              ? "bg-gradient-to-r from-teal-400/20 to-purple-500/20 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 font-semibold"
                              : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                          }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            key={activeTab}
          >
            <h3 className="text-2xl font-semibold mb-2">
              <span className="text-gray-200">
                {experiences[activeTab].role}
              </span>{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-teal-400 to-purple-500"
              >
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className="text-gray-400 mb-6 font-light">
              {experiences[activeTab].duration}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-teal-400 mt-1">▹</span>
                  <span className="font-light leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
