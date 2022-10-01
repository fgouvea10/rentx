import { styled } from "../../../../styles";

export const Container = styled("div", {
  position: "relative",
  width: "100%",

  button: {
    background: "transparent",
    position: "absolute",
    top: 10,
    right: 16,
  },

  p: {
    marginTop: "$2",
    color: "$red500",
  },

  "label.invalid-field": {
    color: "$red500",
  },

  "input.invalid-field": {
    border: "1px solid $red500",
  },
});

export const Label = styled("label", {
  fontSize: "$md",
  fontWeight: "normal",
  position: "absolute",
  pointerEvents: "none",
  left: 16,
  top: 10,
  translate: "transform(-50%, -50%)",
  padding: "0 5px",
  background: "white",
  transition: "0.3s ease all",
  color: "$gray400",
});

export const Input = styled("input", {
  display: "block",
  width: "100%",
  height: "36px",
  fontSize: "$md",
  padding: "$5",
  background: "white",
  color: "$gray900",
  border: "1px solid $gray300",
  borderRadius: "$base",
  transition: "0.3s ease all",

  "&:focus": {
    outline: "none",
    border: "1px solid $gray900",

    "~label": {
      top: "-0.75rem",
      fontSize: "$sm",
      color: "$gray900",
    },
  },

  "&:not(:placeholder-shown)": {
    top: "-0.75rem",
  },
});
