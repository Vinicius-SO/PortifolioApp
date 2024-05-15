import type { Config } from "tailwindcss";
const { colors } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      ...colors,
      "gray-200": "#F8F8F8",
      "gray-600": '#69717E',
      "gray-700": "#68686C",
      "gray-800": "#5C626A",
      "blue-500": "#4A91D3",
      "blue-600":"#417ED9",
      "white": "#ffff"
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
  plugins: [],
};
export default config;
