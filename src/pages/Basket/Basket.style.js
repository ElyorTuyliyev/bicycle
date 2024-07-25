import styled from "styled-components";
import Colors from "../../themes/colors";

const BasketStyle = styled.div`
  .basket__link-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 48px 0 64px 0;
  }

  .basket__link {
    font-size: 14px;
    &:last-child {
      color: ${Colors.orange[600]};
    }
  }

  .basket__title {
    font-size: 64px;
    color: ${Colors.dark[900]};
    margin: 0 0 31px 0;
    font-weight: 400;
  }
`;

export default BasketStyle;
