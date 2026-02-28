/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#1B1A55',
        indigo: '#2D2B7F',
        teal: '#00D4AA',
        tealDark: '#00A88A',
        dark: '#0A0A1A',
        darker: '#050510',
        light: '#E8E8F0',
        muted: '#9494B8',
        accent: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
