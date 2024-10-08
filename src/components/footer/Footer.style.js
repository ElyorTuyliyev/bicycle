import styled from "styled-components";
import Colors from "../../themes/colors";

const FooterStyle = styled.div`
  .footer {
  }

  .subscribe {
    background-color: ${Colors.dark[800]};
  }

  .subscribe__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }

  .subscribe__title {
    color: ${Colors.white[900]};
    font-size: 64px;
    padding: 40px 0 32px 0;
  }

  .subscribe__bc-img-wrapper {
    position: absolute;
    right: 0;
    z-index: 1;
  }

  .subscribe__inp-wrapper {
    display: flex;
    gap: 16px;
    padding-bottom: 14px;
    input {
      max-width: 346px;
      width: 100%;
      padding: 10px 0 10px 10px;
      border-radius: 5px;
      outline: none;
      border: none;
    }
  }

  .subscribe__check-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 40px;
  }

  .subscribe__text {
    color: ${Colors.white[900]};
    font-size: 12px;
  }

  .footer__intro {
    width: 100%;
    background-color: ${Colors.dark[900]};
  }

  .footer__wrapper {
    padding: 91px 0 40px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.dark[700]};
  }

  .footer__list-wrapper {
    display: flex;
    gap: 64px;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__text {
    color: ${Colors.dark[300]};
    width: 289px;
    line-height: 25.6px;
  }

  .footer__link-title {
    color: ${Colors.white[900]};
    font-size: 24px;
    padding: 0 0 32px 0;
  }

  .footer__list-link {
    color: ${Colors.white[900]};
    line-height: 40.6px;
    font-weight: 300;
    cursor: pointer;
    &:hover {
      color: ${Colors.orange[600]};
    }
  }

  .footer__contact-number-wrapper {
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    color: ${Colors.white[900]};
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }

  .footer__world-bike {
    padding: 10px;
    color: ${Colors.dark[500]};
  }
`;
export default FooterStyle;
