"use client";
import React from "react";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CustomButtonProps = ButtonProps & {
  background?: "transparent" | "white";
  textColor?: "black" | "white";
  fontFamily?: "satoshi" | "mont-black";
  text: string;
};

// Styled outside component to avoid the creation at any render.
// ButtonProps type here because the rules is only applied to Button base.
const CustomButtonStyled = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "none",
  // padding by default
  padding: "0.5em 1.5em",
  borderRadius: "0.5em",

  // small
  "&.MuiButton-sizeSmall": {
    padding: "0.5em 1.5em",
    fontSize: "0.75rem",
  },

  // medium
  "&.MuiButton-sizeMedium": {
    padding: "0.7em 2em",
    fontSize: "1rem",
  },

  // large
  "&.MuiButton-sizeLarge": {
    padding: "0.9em 2.4em",
    fontSize: "1.3rem",
  },
}));

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { text, background, textColor, fontFamily, sx, ...rest } = props;

  const customSx = {
    background: background === "white" ? "#fff" : "transparent",
    color: textColor === "white" ? "#fff" : "#000",
    fontFamily:
      fontFamily === "satoshi"
        ? "var(--font-satoshi)"
        : "var(--font-mont-black)",
    ...sx,
  };

  return (
    <CustomButtonStyled {...(rest as ButtonProps)} sx={customSx}>
      {text}
    </CustomButtonStyled>
  );
};
