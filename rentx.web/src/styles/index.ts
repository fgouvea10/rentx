import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray100: "#F4F5F6",
      gray200: "#EBEBF0",
      gray300: "#DEDEE3",
      gray400: "#AEAEB3",
      gray500: "#7A7A80",
      gray600: "#47474D",
      gray900: "#29292E",

      red500: "#DC1637",
      green500: "#03B352",
    },

    space: {
      0: '0px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '0.1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '2rem',
      8: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '7rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },

    fonts: {
      base: 'DM Sans, sans-serif',
      code: 'monospace',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  
    lineHeights: {
      shorter: '120%',
      short: '140%',
      tall: '160%',
      taller: '180%',
    },

    radii: {
      base: '4px',
      pill: '9999px',
    },

    borderWidths: {
      thin: '1px',
      mid: '2px',
      thick: '4px',
    },

    zIndices: {
      fixed: '999px',
      overlay: '9999px',
      portals: '99999px',
    },
  },
});
