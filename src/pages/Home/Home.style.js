import styled from "styled-components";
import HomeImg from "../../assets/images/bc-img.png";
import Color from "../../themes/colors";
import LightColors from "../../themes/colors";
import Colors from "../../themes/colors";
const HomeStyle = styled.div`
  background-image: url(${HomeImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -99;

  .home {
    margin: 170px 0 0 0;
  }

  .home__title {
    width: 679px;
    color: ${Colors.white[900]};
    font-weight: 400;
    font-size: 110px;
  }

  .home__text {
    width: 645px;
    color: ${Colors.white[900]};
    font-weight: 300;
    letter-spacing: 1%;
    font-size: 18px;
    line-height: 28.8px;
    margin: 48px 0 40px 0;
  }

  .home__pagination-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 153px 0 32px 0;

    .home__pagination {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${Colors.dark[500]};
      transition: 0.2s linear;
      &:hover {
        width: 19px;
        height: 19px;
        background-color: ${Colors.orange[600]};
      }

      &:first-child {
        width: 19px;
        height: 19px;
        background-color: ${Colors.orange[600]};
      }
    }
  }

  .home__bicycle-type-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .home__bicycle-type {
      font-size: 24px;
      font-weight: 500;
      color: ${Colors.white[900]};
      background-color: ${Colors.dark[500]};
      padding: 48px;

      &:nth-child(1) {
        height: 190px;
        border-radius: 0 10px 10px 0;
        flex: 1.9;
        background-color: ${Colors.dark[900]};
        display: flex;
        justify-content: flex-end;
        .home__bicycle-type-text {
          width: 293px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          span {
            color: ${Colors.orange[900]};
            font-size: 16px;
          }
        }
      }

      &:nth-child(2) {
        flex: 1;
        background-color: ${Colors.dark[800]};
      }

      &:nth-child(3) {
        flex: 2;
        background-color: ${Colors.dark[600]};
      }
    }
  }

  .home__bicycle-brand-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 48px 0 66px 0;
  }

  .newItems {
    background-color: ${LightColors.dark[100]};
  }

  .newItems__wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 0 0 61px 0;
    position: relative;
  }

  .newItems__title {
    font-weight: 600;
    font-size: 64px;
    letter-spacing: 5%;
    color: ${Colors.dark[900]};
    padding: 80px 0;
  }

  .arrow__left-wrapper,
  .arrow__right-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    position: absolute;
    bottom: 50%;
  }

  .arrow__left-wrapper {
    background-color: ${Colors.dark[300]};
    right: -90px;
  }

  .arrow__right-wrapper {
    left: -90px;
  }

  .catalog__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .catalog__title {
    margin: 190px 0 80px 0;
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 5;
  }

  .catalog__bicycle-wrapper {
    background-color: ${Colors.orange[600]};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0 0 20px;
  }

  .catalog__bicycle {
    font-size: 64px;
    font-weight: 400;
    letter-spacing: 5%;
    color: ${Colors.white[900]};
  }

  .catalog__bicycle-box {
    display: flex;
    gap: 16px;
  }

  .catalog__bicycle-trade-in {
    background-color: ${Colors.dark[900]};
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  }

  .catalog__bicycle-trade-in-title {
    color: ${Colors.white[900]};
    padding: 80px 0 40px 0;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 5%;
    font-size: 64px;
  }

  .catalog__bicycle-spare {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  .catalog__bicycle-spare-card {
    background-color: ${Colors.dark[900]};
    color: #fff;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
  .catalog__bicycle-spare-card-title {
    color: ${Colors.white[900]};
    transform: translateX(20px);
    font-size: 64px;
  }

  .catalog__bicycle-spare-card2 {
    background-color: ${Colors.dark[900]};
    border-radius: 10px;

    img {
      width: 200px;
      height: 190px;
      object-fit: cover;
      transform: translateX(190px);
    }
  }

  .catalog__bicycle-equipment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .catalog__bicycle-equipment-card {
      border-radius: 10px;
      color: #fff;
      background-color: ${Colors.dark[900]};

      p {
        font-size: 42px;
        padding: 20px 0;
        transform: translateX(40px);
      }

      img {
        transform: translateX(150px);
      }
    }
  }

  .catalog__bicycle-equipment-card2 {
    border-radius: 10px;
    color: #fff;
    background-color: ${Colors.dark[900]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 42px;
      transform: translateX(40px);
    }
  }

  .catalog__motivation-text-wrapper {
    display: flex;
    padding: 160px 0 80px 0;
  }

  .catalog__motivation-title {
    width: 700px;
    font-size: 64px;
    color: ${Colors.dark[900]};
    flex: 1;
  }

  .catalog__motivation-text {
    flex: 0.7;
    font-size: 16px;
    line-height: 25.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .catalog__motivation-link {
    color: ${Colors.dark[300]};
  }

  .about {
    img {
      width: 100%;
    }
  }
`;

export default HomeStyle;
