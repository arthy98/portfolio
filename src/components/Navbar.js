import React, { memo } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";

// Extract common styles
const commonLinkStyles = `relative block p-2 text-teal-400 text-xl md:text-2xl cursor-pointer 
                         transition-all duration-500 hover:text-teal-500
                         group-hover:scale-110`;

const commonActiveStyles = `!text-purple-600 dark:!text-purple-400 
                          scale-110 animate-bounce-gentle
                          [filter:drop-shadow(0_0_8px_rgb(147_51_234/1))]
                          dark:[filter:drop-shadow(0_0_8px_rgb(168_85_247/1))]
                          after:content-[''] after:absolute after:inset-0
                          after:bg-purple-500/10 after:blur-md after:-z-10
                          after:rounded-full after:animate-pulse`;

const commonListItemStyles = `transform transition-all duration-300 
                            md:hover:translate-x-2 hover:translate-y-[-0.5rem] 
                            relative group`;

// Navigation item component
const NavItem = memo(({ to, Icon }) => (
  <li className={commonListItemStyles}>
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className={commonLinkStyles}
      activeClass={commonActiveStyles}
    >
      <div className="relative">
        <Icon
          className="transform transition-transform duration-300 
                    group-hover:rotate-[360deg]"
        />
        <span
          className="absolute -inset-2 bg-teal-500/20 rounded-full 
                   scale-0 group-hover:scale-100 transition-transform 
                   duration-300 -z-10"
        />
      </div>
    </Link>
  </li>
));

// Navigation items configuration
const navItems = [
  { to: "details", Icon: FaIcons.FaHome },
  { to: "about", Icon: FaIcons.FaUserAlt },
  { to: "workexperience", Icon: FaIcons.FaBriefcase },
  { to: "projects", Icon: FaIcons.FaLaptopCode },
  { to: "skills", Icon: FaIcons.FaProjectDiagram },
  { to: "contact", Icon: FaIcons.FaEnvelope },
];

const Navbar = () => {
  return (
    <nav
      className="fixed z-50 
      md:left-0 md:top-0 md:h-screen md:w-24
      bottom-0 left-0 right-0 h-16"
    >
      <div className="relative h-full p-4 md:p-6">
        <div
          className="absolute inset-0 bg-gradient-to-br 
          from-gray-100 via-gray-200 to-gray-100 
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
          md:rounded-r-3xl rounded-t-3xl shadow-lg"
        />
        <ul
          className="relative h-full flex md:flex-col flex-row 
                   justify-around items-center md:justify-center md:space-y-8"
        >
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
