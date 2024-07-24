import styled from "styled-components";
import Colors from "../../../../themes/colors";

const AboutTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .about__icon-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .about__icon {
    width: 40px;
    height: 40px;
  }

  .about__title {
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.white[900]};
  }

  .about__text {
    font-size: 14px;
    font-weight: 300;
    line-height: 25.6px;
    color: ${Colors.white[900]};
    width: 274px;
  }
`;

export default AboutTextStyle;
