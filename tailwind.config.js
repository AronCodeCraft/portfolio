/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF9',  // Elevated card surface
          100: '#FAF8F5', // Card background
          200: '#F3EFEA', // Canvas background (warm creamy gray)
          300: '#E9E4DC', // Slightly deeper section background / hover
          400: '#DED8CE', // Subtle card borders
          500: '#CBC4B8', // Stronger borders / dividers
        },
        charcoal: {
          900: '#11161B', // Deepest text / primary buttons
          800: '#181E24', // Primary body / headings
          700: '#2A333C', // Secondary text
          600: '#4A545E', // Muted text / descriptions
          500: '#6C7784', // Subtle icons / placeholders
          400: '#949FA9',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 6px -1px rgba(30, 25, 20, 0.04), 0 1px 3px -1px rgba(30, 25, 20, 0.03)',
        'soft-md': '0 6px 16px -3px rgba(30, 25, 20, 0.06), 0 2px 6px -2px rgba(30, 25, 20, 0.04)',
        'soft-lg': '0 12px 28px -5px rgba(30, 25, 20, 0.08), 0 4px 10px -3px rgba(30, 25, 20, 0.04)',
      }
    },
  },
  plugins: [],
}
