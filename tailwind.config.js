/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E6A23C",
        secondary: "#67C23A",
        accent: "#F56C6C",
        dark: "#2C3E50",
        'warm': {
          50: '#FDF8F1',
          100: '#FAF0E4',
          200: '#F5E1C9',
          300: '#F0D2AE',
          400: '#EBC393',
          500: '#E6A23C',
          600: '#D98E23',
          700: '#B37019',
          800: '#8C5714',
          900: '#66400F',
        },
        'warm-gray': {
          50: '#FAF9F7',
          100: '#F5F4F1',
          200: '#E8E6E1',
          300: '#D3CEC4',
          400: '#B8B2A7',
          500: '#A39E93',
          600: '#857F72',
          700: '#625D52',
          800: '#504A40',
          900: '#423D33',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'food-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E6A23C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} 