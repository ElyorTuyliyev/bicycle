import styled from "styled-components";
import Colors from "../../themes/colors";

const CardStyle = styled.div`
  background-color: ${Colors.white[900]};
  border-radius: 10px;
  padding: 0 16px;
  position: relative;

  .card__flag-wrapper {
    display: flex;
    color: black;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 0;

    img {
      border-radius: 10px 0 0 0;
      transform: translateX(-15px);
    }
  }

  .card__text {
    width: 349px;
    font-weight: 400;
    font-size: 18px;
    color: ${Colors.dark[900]};
    line-height: 28.8px;
    padding: 0 0 24px 0;
  }

  .card__cost {
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.dark[400]};
    padding: 0 0 20px 0;
  }

  .card__button {
    padding-bottom: 16px;
  }
`;
export default CardStyle;
