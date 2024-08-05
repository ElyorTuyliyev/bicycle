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
import { Link } from "react-router-dom";

const Header = () => {
  const link = [
    {
      title: "Trade In",
      path: "/tradein",
    },
    {
      title: "Велосипеды",
      path: "/bicycles",
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
    <HeaderStyle>
      <header className="header">
        <Container>
          <div className="header__wrapper">
            <Link to={"/"}>
              <img src={LogoIcon} alt="logo" />
            </Link>
            <div className="header__link-wrapper">
              <div className="header__links">
                {link.map((item) => (
                  <LinkTitle key={item.title} {...item} />
                ))}
              </div>
              <div className="header__link-icon">
                <img src={SearchIcon} alt="search-icon" />
                <img src={UserIcon} alt="user-icon" />
                <Link to={"/productAdd"}>
                  <img src={HeartIcon} alt="heart-icon" />
                </Link>

                <Link to="/basket">
                  <img src={ShopIcon} alt="shop-icon" />
                </Link>
              </div>
              <img src={MenuBarIcon} alt="menu-icon" />
            </div>
          </div>
        </Container>
      </header>
    </HeaderStyle>
  );
};

export default Header;
