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
`;

export default HomeStyle;
