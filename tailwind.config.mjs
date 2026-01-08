/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blacks to prevent white gaps
        background: "#000000",
        foreground: "#ffffff",
        // Custom branding colors
        brand: {
          yellow: "#eab308",
          green: "#16a34a",
        },
      },
      animation: {
        // Custom shine for the WhatsApp button
        'shine': 'shine 1.5s ease-in-out infinite',
        // Pulse for the "Live" terminal indicators
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      backgroundImage: {
        // Create a global gradient to blend sections
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'terminal-grid': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
      boxShadow: {
        // Neon glows for your buttons and bars
        'neon-yellow': '0 0 15px rgba(234, 179, 8, 0.3)',
        'neon-green': '0 0 15px rgba(22, 163, 74, 0.3)',
      },
    },
  },
  plugins: [],
};