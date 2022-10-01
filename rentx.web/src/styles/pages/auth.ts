import { styled } from "..";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const AuthContent = styled("div", {
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: "640px",
  margin: "$6 auto",

  p: {
    color: "$gray500",
    fontSize: "$md",
    fontWeight: "$regular",
    lineHeight: "$tall",
    marginTop: "$2",
  },

  form: {
    marginTop: "$12",
  },
});

export const InputContainer = styled("div", {
  width: "100%",
  marginTop: "$6",
});

export const Box = styled("form", {
  background: "white",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  padding: "$6",

  h1: {
    color: "$gray900",
    fontSize: "$xl",
    fontWeight: "$regular",
    lineHeight: "$tall",
  },

  ".top": {
    marginTop: "$8",
  },

  "> a": {
    textDecoration: "underline",
    color: "$red500",
    marginTop: "$4",
    textAlign: "right",
    display: "block",
  },

  p: {
    marginTop: "$8",
    textAlign: "center",
    display: "block",
  },

  "p a": {
    color: "$red500",
    fontWeight: "$medium",
  },
});

export const ButtonContainer = styled("div", {
  marginTop: "2rem",
  width: "100%",
});
