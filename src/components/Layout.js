import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div
      className="relative min-h-screen bg-gray-50 dark:bg-gray-900 
                    transition-colors duration-300 overflow-hidden"
    >
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute top-20 left-40 w-72 h-72 
                      bg-teal-500 dark:bg-teal-400 
                      rounded-full mix-blend-multiply dark:mix-blend-multiply 
                      filter blur-xl animate-blob"
        ></div>
        <div
          className="absolute top-40 right-40 w-72 h-72 
                      bg-purple-500 dark:bg-purple-400 
                      rounded-full mix-blend-multiply dark:mix-blend-multiply 
                      filter blur-xl animate-blob animation-delay-2000"
        ></div>
        <div
          className="absolute -bottom-20 left-20 w-72 h-72 
                      bg-pink-500 dark:bg-pink-400 
                      rounded-full mix-blend-multiply dark:mix-blend-multiply 
                      filter blur-xl animate-blob animation-delay-4000"
        ></div>
        <div
          className="absolute bottom-40 right-20 w-72 h-72 
                      bg-blue-500 dark:bg-blue-400 
                      rounded-full mix-blend-multiply dark:mix-blend-multiply 
                      filter blur-xl animate-blob animation-delay-6000"
        ></div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
