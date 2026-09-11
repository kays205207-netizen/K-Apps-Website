/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#001f3f',
        'electric-blue': '#0080ff',
        'cyan': '#00d4ff',
        'dark-navy': '#000a1f',
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #001f3f 0%, #0080ff 50%, #00d4ff 100%)',
        'gradient-navy': 'linear-gradient(180deg, #001f3f 0%, #000a1f 100%)',
      },
      backdropBlur: {
        'xl': '20px',
        'xxl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 128, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
