import styled from "styled-components";
import HomeImg from "../../assets/images/bc-img.png";
import Color from "../../themes/colors";
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
    color: #fff;
    font-weight: 400;
    font-size: 110px;
  }

  .home__text {
    width: 645px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1%;
    font-size: 18px;
    line-height: 28.8px;
    margin: 48px 0 40px 0;
  }
`;

export default HomeStyle;
