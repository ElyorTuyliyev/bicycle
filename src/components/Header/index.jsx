import React from "react";
import Container from "../../container";
import HeaderStyle from "./header.style";
import LogoIcon from "../../assets/icons/logo.svg";
import LinkTitle from "../Header/components/LinkTitle";

const Header = () => {
  return (
    <Container>
      <HeaderStyle>
        <img src={LogoIcon} alt="logo" />
        <div className="header__link-wrapper">
          <div className="header__links">
            <LinkTitle />
          </div>
          <div className="header__link-icon"></div>
        </div>
      </HeaderStyle>
    </Container>
  );
};

export default Header;
