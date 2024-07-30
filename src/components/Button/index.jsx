import React from "react";
import StyledButton from "./Button.style";

const Button = ({ children, variant, fullWidth = false, onClick }) => {
  return (
    <StyledButton fullWidth={fullWidth} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
