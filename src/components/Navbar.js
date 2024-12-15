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
    <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative p-6 animate-pulse-slow">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                       rounded-[40px_20px_40px_20px] shadow-lg"
        ></div>
        <ul className="relative space-y-8 px-2">
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="details"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="workexperience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
          <li className="transform transition-all duration-300 hover:translate-x-2 relative group">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="relative block p-2 text-teal-400 text-2xl cursor-pointer 
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
