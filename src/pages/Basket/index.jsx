import Button from "../../components/Button";
import Header from "../../components/Header";
import BasketStyle from "./Basket.style";
import BasketCard from "./Components/BasketCard";
import BasketImg from "../../assets/images/basket-bicycle.png";
import CrossIcon from "../../assets/icons/Icon-cross.svg";
import { useState } from "react";

const Basket = () => {
  const [data, setData] = useState([
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
      imgCross: CrossIcon,
    },
    {
      id: Math.floor(Math.random() * 100),
      img: BasketImg,
      alt: "sc",
      text: "Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018;",
      count: 1,
      cost: 150,
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

  return (
    <>
      <Header />
      <BasketStyle>
        {data.map((item) => (
          <BasketCard
            key={item.cost}
            {...item}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        ))}
      </BasketStyle>
    </>
  );
};

export default Basket;
