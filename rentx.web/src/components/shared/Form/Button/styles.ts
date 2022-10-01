import { keyframes, styled } from "../../../../styles";

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const ButtonContainer = styled("button", {
  width: "100%",
  color: "white",
  background: "$red500",
  fontWeight: "$medium",
  borderRadius: "$base",
  fontSize: "$md",
  padding: "0.75rem 1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "opacity 0.2s",

  "&:not(:disabled):hover": {
    opacity: 0.9,
  },

  "&:disabled": {
    opacity: 0.7,
    cursor: "auto",
  },

  ".spin": {
    animation: `${spin} 1s linear infinite`,
  },
});
