import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray100",
    color: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },

  html: {
    fontFamily: "$sans",
    "-ms-text-size-adjust": "100%",
    "-webkit-text-size-adjust": "100%",
  },

  "body, input, textarea, button": {
    fontFamily: "$base",
    fontWeight: "$regular",
    // letterSpacing: "-0.06em",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  "ol, ul": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  "article, aside, details, footer, header, main, nav, section": {
    display: "block",
  },

  hr: {
    "-moz-box-sizing": "content-box",
    "box-sizing": "content-box",
    height: 0,
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },
});
