import styled from "styled-components";
import Colors from "../../themes/colors";

const StyledButton = styled.button`
  background: ${(props) =>
    props.variant === "orange"
      ? Colors.orange[600]
      : props.variant === "blue"
      ? "blue"
      : "red"};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  border: none;
  border-radius: 6px;
  padding: 18px 45px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

export default StyledButton;
