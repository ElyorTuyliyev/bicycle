import React, { useContext } from "react";
import StyledButton from "./Button.style";
import { ItemContext } from "../../pages/Product add";

const Button = ({ children, variant, fullWidth = false, onClick }) => {
  return (
    <StyledButton fullWidth={fullWidth} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
