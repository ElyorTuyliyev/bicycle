import Header from "../../components/Header";
import BasketStyle from "./Basket.style";
import BasketCard from "./Components/BasketCard";
import BasketImg from "../../assets/images/basket-bicycle.png";
import CrossIcon from "../../assets/icons/Icon-cross.svg";
import { useState } from "react";
import Container from "../../container";

const Basket = () => {
  const [data, setData] = useState([
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 435000,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Trek Fx 3 Disc Dnister Black HYBD 2022",
      count: 1,
      cost: 97070,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Trek Marlin 4 Aloha ATB 27.5 2022",
      count: 1,
      cost: 73300,
      imgCross: CrossIcon,
    },
  ]);

  const handleDecrement = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  const handleIncrement = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <Container>
        <BasketStyle>
          <div className="basket__link-wrapper">
            <p className="basket__link">Главная </p>
            <p className="basket__line">/</p>
            <p className="basket__link">Корзина</p>
          </div>
          <h1 className="basket__title">Корзина</h1>
          {data.map((item) => (
            <BasketCard
              key={item.cost}
              {...item}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleDelete={handleDelete}
            />
          ))}
        </BasketStyle>
      </Container>
    </>
  );
};

export default Basket;
