/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'military-red': '#8B0000', // Dark red
        'military-black': '#0a0a0a', // Textured black
        'military-yellow': '#D4AF37', // Burnt yellow
      },
      fontFamily: {
        'stencil': ['"Black Ops One"', 'cursive'], // Stencil/Military style
        'sans': ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
