import styled from "styled-components";
import Colors from "../../themes/colors";

const HeaderStyle = styled.div`
  .header__wrapper {
    padding: 29px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    background-color: ${Colors.dark[900]};
  }

  .header__links {
    display: flex;
    gap: 32px;
  }

  .header__link-wrapper {
    display: flex;
    gap: 74px;
  }

  .header__link-icon {
    display: flex;
    gap: 24px;
  }
`;

export default HeaderStyle;
