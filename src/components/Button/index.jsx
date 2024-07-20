import React from "react";
import StyledButton from "./Button.style";

const Button = ({ children, variant, fullWidth = false }) => {
  return (
    <StyledButton fullWidth={fullWidth} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
