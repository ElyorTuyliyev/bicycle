import React from "react";
import Container from "../../container";
import HeaderStyle from "./header.style";
import LogoIcon from "../../assets/icons/logo.svg";
import LinkTitle from "./components/LinkTitle";
import SearchIcon from "../../assets/icons/search.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import MenuBarIcon from "../../assets/icons/menu-bar.svg";
import ShopIcon from "../../assets/icons/shop.svg";
import UserIcon from "../../assets/icons/user1.svg";

const Header = () => {
  const link = [
    {
      title: "Trade In",
    },
    {
      title: "Велосипеды",
    },
    {
      title: "Запчасти",
    },
    {
      title: "Экипировка",
    },
    {
      title: "Аксессуары",
    },
    {
      title: "Велостанки",
    },
  ];
  return (
    <Container>
      <HeaderStyle>
        <img src={LogoIcon} alt="logo" />
        <div className="header__link-wrapper">
          <div className="header__links">
            {link.map((item) => (
              <LinkTitle key={item.title} {...item} />
            ))}
          </div>
          <div className="header__link-icon">
            <img src={SearchIcon} alt="search-icon" />
            <img src={UserIcon} alt="user-icon" />
            <img src={HeartIcon} alt="heart-icon" />
            <img src={ShopIcon} alt="shop-icon" />
          </div>
          <img src={MenuBarIcon} alt="menu-icon" />
        </div>
      </HeaderStyle>
    </Container>
  );
};

export default Header;
