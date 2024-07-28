import Header from "../../components/Header";
import BasketStyle from "./Basket.style";
import BasketCard from "./Components/BasketCard";
import BasketImg from "../../assets/images/basket-bicycle.png";

import { useEffect, useState } from "react";
import Container from "../../container";
import Button from "../../components/Button";
import Card from "../../components/Card";
import FlagImgItaly from "../../assets/images/flag-italy.png";
import ImgBicycle from "../../assets/images/bicycle-1.png";
import Footer from "../../components/footer";

const Basket = () => {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({});

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

  const basketCard = [
    {
      flagImg: FlagImgItaly,
      soldText: "Распродано",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
    },
    {
      flagImg: FlagImgItaly,
      soldText: "Распродано",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
    },
    {
      flagImg: FlagImgItaly,
      soldText: "Распродано",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({
      id: Math.floor(Math.random() * 100),
      img: "",
      text: "",
      count: 0,
      cost: 0,
    });
  };

  const onchangeValue = (e) => {
    const { name, value } = e.target;
    if (name == "count" || name == "cost") {
      setFormData({ ...formData, [name]: parseFloat(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAllCardDelete = () => {
    setData([]);
  };

  const totalAmount = data.reduce((acc, item) => {
    return acc + item.count * item.cost;
  }, 0);

  const discount = totalAmount / 100;

  const [edit, setEdit] = useState();

  const handleEditCard = () => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <Container>
        <form>
          <input
            value={formData.img}
            name="img"
            type="url"
            placeholder="ImgUrl"
            onChange={onchangeValue}
          />
          <input
            value={formData.text}
            name="text"
            type="text"
            placeholder="about"
            onChange={onchangeValue}
          />
          <input
            value={formData.count}
            name="count"
            type="number"
            placeholder="amount"
            onChange={onchangeValue}
          />
          <input
            value={formData.cost}
            name="cost"
            type="number"
            placeholder="price"
            onChange={onchangeValue}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <BasketStyle>
          <div className="basket__link-wrapper">
            <p className="basket__link">Главная </p>
            <p className="basket__line">/</p>
            <p className="basket__link">Корзина</p>
          </div>
          <h1 className="basket__title">Корзина</h1>

          <div className="basket__card-wrapper">
            <div className="basket__card-intro">
              <div className="basket__card-filter">
                <p>Вернуться к покупкам</p>
                <p className="basket__clear" onClick={handleAllCardDelete}>
                  Очистить корзину
                </p>
              </div>
              {data?.map((item) => {
                return (
                  <BasketCard
                    key={item.id}
                    {...item}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    handleDelete={handleDelete}
                    handleEditCard={handleEditCard}
                  />
                );
              })}
            </div>
            <div className="basket__design">
              <div className="basket__order-number-wrapper">
                <p className="basket__order-text">Номер заказа</p>
                <p className="basket__order-number">8378287</p>
              </div>
              <div className="basket__order-cost-wrapper">
                <p className="basket__order-text">Сумма заказа (без скидки)</p>
                <p className="basket__order-cost">
                  {totalAmount.toLocaleString("Fi-fi")} ₽
                </p>
              </div>
              <p className="basket__discount">
                Скидка <span> {discount.toLocaleString("Fi-fi")} ₽ </span>
              </p>
              <p className="basket__order-total">
                Итого{" "}
                <span>
                  {(totalAmount - discount).toLocaleString("Fi-fi")} ₽
                </span>
              </p>
              <Button fullWidth variant={"orange"}>
                Оформить заказ
              </Button>
            </div>
          </div>
          <div className="similar__products-wrapper">
            <h2 className="similar__products-title">Похожие товары</h2>
            <div className="similar__card-wrapper">
              {basketCard.map((item) => (
                <Card {...item} />
              ))}
            </div>
          </div>
        </BasketStyle>
      </Container>
      <Footer />
    </>
  );
};

export default Basket;
