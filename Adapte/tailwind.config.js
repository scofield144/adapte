/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    screens: {
    'tablet': { 'min': '640px', 'max': '890px' },
      'laptop': { 'min': '891px' },
      'desktop': { 'min': '1285px' },
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      'md-min': {'min': '767px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundOpacity: {
        '98': '0.98',
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      Black: "#000",
      // Reds and Pinks
      Red: "#FF0000",
      Crimson: "#DC143C",
      Coral: "#FF7F50",
      Pink: "#FFC0CB",
      Magenta: "#FF00FF",

      // Oranges
      Orange: "#FFA500",
      Amber: "#FFBF00",
      Peach: "#FFDAB9",

      // Yellows
      Yellow: "#FFFF00",
      Gold: "#FFD700",
      Lemon: "#FFFAFA",

      // Greens
      Green: "#008000",
      Lime: "#00FF00",
      Teal: "#008080",
      Olive: "#808000",
      Mint: "#98FF98",

      // Blues
      Blue: "#0000FF",
      Navy: "#000080",
      Turquoise: "#40E0D0",
      SkyBlue: "#87CEEB",
      Indigo: "#4B0082",

      // Purples
      Violet: "#EE82EE",
      Lavender: "#E6E6FA",

      // Browns and Greys
      Brown: "#A52A2A",
      Tan: "#D2B48C",
      Grey: "#808080",
      Silver: "#C0C0C0",

      // Neutrals
      Beige: "#F5F5DC",
      Ivory: "#FFFFF0",

      magenta: "#f0f2f2",
    },
    plugins: [],
  },
};
