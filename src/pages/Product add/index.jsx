import Header from "../../components/Header";
import ProductAddStyle from "./ProductAdd.style";
import { createContext, useState } from "react";
import Container from "../../container";
import FlagImgItaly from "../../assets/images/flag-italy.png";
import ImgBicycle from "../../assets/images/bicycle-1.png";

export const ProductAddContext = createContext();

function ProductAdd() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState([]);
  const [formData, setFormData] = useState({});

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
    if (Object.values(edit).length) {
      setData(
        data.map((item) =>
          item.id === edit.id ? { ...item, ...formData } : item
        )
      );
    } else {
      setData([...data, { ...formData, id: Math.floor(Math.random() * 100) }]);
    }

    setFormData({
      id: "",
      img: "",
      text: "",
      count: 0,
      cost: 0,
    });
  };

  const onchangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "count" || name === "cost") {
      setFormData({ ...formData, [name]: parseFloat(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <ProductAddContext.Provider value="hhheheh">
      <Header />
      <Container>
        <ProductAddStyle>
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
        </ProductAddStyle>
      </Container>
    </ProductAddContext.Provider>
  );
}

export default ProductAdd;
