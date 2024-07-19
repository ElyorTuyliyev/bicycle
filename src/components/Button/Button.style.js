import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.variant === "orange"
      ? "orange"
      : props.variant === "blue"
      ? "blue"
      : "red"};
  border: 1px solid gainsboro;
  border-radius: 6px;
  padding: 8px 16px;
  color: #fff;
`;

export const StyledBlueButton = styled.button`
  background: violet;
  border: 1px solid gainsboro;
  border-radius: 6px;
  padding: 8px 16px;
  color: #fff;
`;

export default StyledButton;
