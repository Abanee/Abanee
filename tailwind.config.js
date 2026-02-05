/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#1a1a1a',
        'espresso': '#2a2522',
        'amber': '#FFBF00',
        'burnt-orange': '#CC5500',
        'sunset-gold': '#FFA500',
        'warm-cream': '#F5F5DC',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}