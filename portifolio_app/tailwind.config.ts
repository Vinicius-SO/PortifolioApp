import type { Config } from "tailwindcss"
const plugin = require("tailwindcss/plugin");
const { colors } = require('tailwindcss/defaultTheme')

const Myclass = plugin(function ({ addUtilities }:any) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors:{
      ...colors,
      "gray-200": "#F8F8F8",
      "gray-600": '#69717E',
      "gray-700": "#68686C",
      "gray-800": "#5C626A",
      "blue-300": "#89C6FF",
      "blue-500": "#4A91D3",
      "blue-600":"#417ED9",
      "white": "#ffff",
      "black": "#0000"
    },
    fontFamily: {
      subrayada: ['var(--font-montserrat-subrayada)'],
      serif:['var(--font-Serif)'],
      electrolize:['var(--font-electrolize)']
    },
    fontSize:{
      "xl": "1.25rem",
      "2xl": '1.5rem',  
      "3xl": '2rem',
    }
  },
  plugins: [require("tailwindcss-animate"), Myclass],
} satisfies Config

export default config