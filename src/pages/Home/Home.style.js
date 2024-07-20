import styled from "styled-components";
import HomeImg from "../../assets/images/bc-img.png";
const HomeStyle = styled.div`
  background-image: url(${HomeImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -99;

  .home {
    margin: 200px 0 0 0;
  }

  .home__title {
    color: #fff;
  }
`;

export default HomeStyle;
