import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'albert': ["'Albert Sans'"]
    },
    screens: {
      'sm': '540px',
      'md': '1080px'
    },
    extend: {
      colors: {
        'turq': {
          '50': '#f0fdfb',
          '100': '#ccfbf3',
          '200': '#99f6e8',
          '300': '#5eeada',
          '400': '#2bd4c6',
          '500': '#14b8ad',
          '600': '#0d948e',
          '700': '#0f7672',
          '800': '#115e5c',
          '900': '#134e4d',
          '950': '#042e2f',
        },
        'green': {
          '50': '#edfff8',
          '100': '#d5fff0',
          '200': '#aeffe1',
          '300': '#70ffcc',
          '400': '#2bfdaf',
          '500': '#05ffa3',
          '600': '#00c075',
          '700': '#00965f',
          '800': '#06754d',
          '900': '#076041',
          '950': '#003724',
        },
        'red': {
          '50': '#fff1f2',
          '100': '#ffdfe0',
          '200': '#ffc5c7',
          '300': '#ff9da1',
          '400': '#ff656b',
          '500': '#ff343b',
          '600': '#ed151d',
          '700': '#cd0e15',
          '800': '#a50f14',
          '900': '#881418',
          '950': '#4a0508',
        },
        'smoke': {
          '50': '#f5f6f6',
          '100': '#e4e6e9',
          '200': '#ccd1d5',
          '300': '#a9b0b7',
          '400': '#7f8891',
          '500': '#636c77',
          '600': '#555c65',
          '700': '#494d55',
          '800': '#414449',
          '900': '#393b40',
          '950': '#131416',
        },
        'glacier': {
          '50': '#f2f8f9',
          '100': '#deedef',
          '200': '#c0dae1',
          '300': '#83b6c3',
          '400': '#629dae',
          '500': '#468194',
          '600': '#3d6b7d',
          '700': '#375967',
          '800': '#334b57',
          '900': '#2e404b',
          '950': '#1b2931',
        },
      
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
