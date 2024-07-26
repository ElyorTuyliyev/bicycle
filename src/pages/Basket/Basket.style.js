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

  .basket__card-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }

  .basket__clear {
    cursor: pointer;
    border-radius: 5px;
    padding: 3px 8px;
    transition: 0.1s linear;
    &:hover {
      box-shadow: 0 0 5px ${Colors.dark[300]};
    }
    &:active {
      transform: scale(0.98);
    }
  }

  .basket__design {
    border: 1px solid ${Colors.dark[200]};
    padding: 32px 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .basket__card-intro {
    flex: 1;
  }

  .basket__card-filter {
    display: flex;
    justify-content: space-between;
    p {
      &:last-child {
        color: ${Colors.dark[300]};
      }
      &:first-child {
        color: ${Colors.orange[600]};
      }
    }
  }

  .basket__order-text,
  .basket__discount {
    width: 113px;
    color: ${Colors.dark[300]};
    font-weight: 300;
  }

  .basket__order-number-wrapper,
  .basket__order-cost-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }

  .basket__discount {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .basket__order-total {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
  }

  .similar__card-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 80px 0 160px 0;
  }

  .similar__products-title {
    font-size: 40px;
    margin: 160px 0 0 0;
  }
`;

export default BasketStyle;
