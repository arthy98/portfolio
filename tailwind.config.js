module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#64ffda", // Teal color
        background: "#0a192f", // Dark background
        text: "#8892b0", // Muted text
        heading: "#ccd6f6", // Light text
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blob: 'blob 7s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'border-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: 0.8,
          },
        },
      },
      borderRadius: {
        'hexagon': '24% 76% 28% 72% / 71% 34% 66% 29%',
      },
      spacing: {
        'navbar-mobile': '4rem', // Height for mobile navbar
        'navbar-desktop': '100%', // Width for desktop navbar
      },
      fontFamily: {
        sans: ["Calibre", "Inter", "San Francisco", "sans-serif"],
      },
    },
  },
  plugins: [],
};
