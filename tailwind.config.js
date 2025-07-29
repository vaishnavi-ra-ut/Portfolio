import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
    twinkle: "twinkle 100s linear infinite",
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
     twinkle: {
      '0%': { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '10000px 10000px' },
    },
  },
}
  },
  plugins: [daisyui],
}
