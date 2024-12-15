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
        "Led an initiative to migrate 15+ customization codes from high-risk legacy systems to Amazon's internal code repository using Java.",
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
      id="workexperience"
      className="min-h-screen flex flex-col items-center md:pl-28 px-4 md:pr-6 md:px-32 relative pt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center 
                   bg-gradient-to-r from-teal-400 to-purple-500 
                   text-transparent bg-clip-text"
      >
        Work Experience
      </motion.h2>

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

      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company names list */}
          <div className="md:w-48 w-full overflow-x-auto">
            <div className="flex md:flex-col flex-row md:space-y-2 space-x-4 md:space-x-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-left whitespace-nowrap transition-all duration-300
                            hover:text-teal-400 hover:bg-gray-800/50 rounded
                            ${
                              activeTab === index
                                ? "text-teal-400 bg-gray-800/50"
                                : "text-gray-400"
                            }`}
                >
                  {exp.company}
                </button>
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
              <h3 className="text-2xl font-bold text-gray-200">
                {experiences[activeTab].role}{" "}
                <span className="text-teal-400">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="text-gray-400">{experiences[activeTab].duration}</p>
              <ul className="space-y-4">
                {experiences[activeTab].details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="text-teal-400 mt-1.5">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
