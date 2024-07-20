import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.variant === "orange"
      ? "orange"
      : props.variant === "blue"
      ? "blue"
      : "red"};
  border: none;
  border-radius: 6px;
  padding: 18px 45px;
  color: #fff;
  font-weight: 500;
`;

export default StyledButton;
