import styled from "styled-components";
import Colors from "../../../../themes/colors";

const BasketCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid ${Colors.dark[200]};
  padding: 10px 0 10px 0;

  .basketCard__text {
    width: 200px;
    color: ${Colors.dark[900]};
    font-size: 18px;
    font-weight: 300;
    line-height: 28.8px;
  }

  .basketCard__btn-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${Colors.dark[200]};
    border-radius: 10px;

    button {
      padding: 16px;
      border: none;
      background-color: transparent;
      font-size: 16px;
    }
  }
`;

export default BasketCardStyle;
