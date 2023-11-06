/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: '475px',
      
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      sourcesan: ['Source Serif 4', 'serif'],
      inconsolata:['Inconsolata', 'monospace'],
      // lora:['Lora','serif']
      // bitter:['Bitter', 'serif']
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        text: "text 5s ease infinite",
      },
      scrollbar: {
        "::-webkit-scrollbar": {
          width: "20px",
          height: "10px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          "border-radius": "100vh",
          "background": "#f7f4ed",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          "background": "#e0cbcb",
          "border-radius": "100vh",
          "border": "3px solid #f6f7ed",
        },
        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          "background": "#c0a0b9",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar'),],
};