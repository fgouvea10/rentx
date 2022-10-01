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
        gray100: '#F4F5F6',
        gray200: '#EBEBF0',
        gray300: '#DEDEE3',
        gray400: '#AEAEB3',
        gray500: '#7A7A80',
        gray600: '#47474D',
        gray900: '#29292E',

        red500: '#DC1637',
        green500: '#03B352'
    },
  },
});
