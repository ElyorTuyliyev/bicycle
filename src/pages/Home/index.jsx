import Button from "../../components/Button";
import Header from "../../components/Header";
import Container from "../../container";
import HomeStyle from "./Home.style";
import SramBrand from "../../assets/images/logotip-sram.png";
import TacxBrand from "../../assets/images/logotip-tacx.png";
import TopeakBrand from "../../assets/images/logotip-topeak.png";
import TrekBrand from "../../assets/images/logotip-trek.png";
import WahooBrand from "../../assets/images/logotip-wahoo.png";
import Card from "../../components/Card";
import FlagImgItaly from "../../assets/images/flag-italy.png";
import FlagImgUsa from "../../assets/images/flag-usa.png";
import ImgBicycle from "../../assets/images/bicycle-1.png";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
function Home() {
  const cards = [
    {
      flagImg: FlagImgItaly,
      soldText: "Распродано",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
      button: (
        <Button variant={"red"} fullWidth>
          распроданный
        </Button>
      ),
    },
    {
      flagImg: FlagImgUsa,
      soldText: "Распродано",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
      button: (
        <Button variant={"red"} fullWidth>
          распроданный
        </Button>
      ),
    },
    {
      flagImg: FlagImgUsa,
      soldText: "В наличии",
      img: ImgBicycle,
      text: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
      cost: "684 840 ₽",
      button: (
        <Button variant={"orange"} fullWidth>
          В 1 клик
        </Button>
      ),
    },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <HomeStyle>
          <Container>
            <section className="home">
              <div className="home__wrapper">
                <h1 className="home__title">Электро велосипеды</h1>
                <p className="home__text">
                  Cento10 Hybrid — это гоночный велосипед с помогающим
                  педалированию электроприводом, который устанавливает новый,
                  очень высокий стандарт для данной категории
                </p>
                <Button variant={"orange"}>Подробнее</Button>

                <div className="home__pagination-wrapper">
                  <div className="home__pagination"></div>
                  <div className="home__pagination"></div>
                  <div className="home__pagination"></div>
                </div>
              </div>
            </section>
          </Container>
          <div className="home__bicycle-type-wrapper">
            <div className="home__bicycle-type">
              <p className="home__bicycle-type-text">
                Экстремальное <br /> вождение на горном <br /> велосипеде
                <span>Подробнее</span>
              </p>
            </div>
            <div className="home__bicycle-type">
              <p className="home__bicycle-type-text">
                Велосипеды <br /> для профессионалов
              </p>
            </div>
            <div className="home__bicycle-type">
              <p className="home__bicycle-type-text">
                Долгая поездка <br /> на шоссейном велосипеде
              </p>
            </div>
          </div>
          <div className="home__bicycle-brand-wrapper">
            <img src={SramBrand} alt="SramBrand-logo" />
            <img src={TacxBrand} alt="TacxBrand-logo" />
            <img src={TopeakBrand} alt="TopeakBrand-logo" />
            <img src={TrekBrand} alt="TrekBrand-logo" />
            <img src={WahooBrand} alt="WahooBrand-logo" />
          </div>
          <section className="newItems">
            <Container>
              <h3 className="newItems__title"> Новинки</h3>
              <div className="newItems__wrapper">
                <div className="arrow__left-wrapper">
                  <img src={ArrowRightIcon} alt="ArrowRightIcon" />
                </div>
                <div className="arrow__right-wrapper">
                  <img src={ArrowLeftIcon} alt="ArrowLeftIcon" />
                </div>
                {cards.map((item) => (
                  <Card key={item.text} {...item} />
                ))}
              </div>
            </Container>
          </section>
          <section className="catalog"></section>
        </HomeStyle>
      </main>
    </>
  );
}

export default Home;
