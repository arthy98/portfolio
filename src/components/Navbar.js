import React from "react";
import {
  FaHome,
  FaUserAlt,
  FaEnvelope,
  FaProjectDiagram,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      className="fixed z-50 
    md:left-0 md:top-0 md:h-screen md:w-24
    bottom-0 left-0 right-0 h-16"
    >
      <div className="relative h-full p-4 md:p-6">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
        md:rounded-r-3xl rounded-t-3xl shadow-lg"
        ></div>
        <ul
          className="relative h-full flex md:flex-col flex-row 
                   justify-around items-center md:justify-center md:space-y-8"
        >
          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="details"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaHome
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>

          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaUserAlt
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>

          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="workexperience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaBriefcase
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>

          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaLaptopCode
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>

          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaProjectDiagram
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>

          <li
            className="transform transition-all duration-300 
                         md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                         relative group"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                       transition-all duration-500 hover:text-teal-500
                       group-hover:scale-110"
              activeClass="!text-teal-400 scale-110 animate-bounce-gentle
                         [filter:drop-shadow(0_0_8px_rgb(45_212_191/1))]
                         after:content-[''] after:absolute after:inset-0
                         after:bg-teal-500/10 after:blur-md after:-z-10
                         after:rounded-full after:animate-pulse"
            >
              <div className="relative">
                <FaEnvelope
                  className="transform transition-transform duration-300 
                            group-hover:rotate-[360deg]"
                />
                <span
                  className="absolute -inset-2 bg-teal-500/20 rounded-full 
                           scale-0 group-hover:scale-100 transition-transform 
                           duration-300 -z-10"
                ></span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
