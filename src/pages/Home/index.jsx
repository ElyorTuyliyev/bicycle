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
import CatalogBicycle from "../../assets/images/catalog-bicycle.png";
import CatalogBicycle2 from "../../assets/images/catalog-bicycle-1.png";
import CatalogStands from "../../assets/images/Bicycle-stands.png";
import CatalogAccessories from "../../assets/images/catalog-bicycle-accessories.png";
import CatalogScot from "../../assets/images/catalog-bicycle-caska.png";
import CatalogBalloon from "../../assets/images/balloon.png";
import AboutNaturel from "../../assets/images/natural.png";
import IconDiamond from "../../assets/icons/icon-diamond.svg";
import IconSticker from "../../assets/icons/icon-sticker.svg";
import IconSetting from "../../assets/icons/icon-setting.svg";
import IconHours from "../../assets/icons/icon-hours.svg";
import AboutText from "./components/About";
import ModelsImg from "../../assets/images/models-img.png";
import MountainImg from "../../assets/images/mountain-img.png";
import IconBike from "../../assets/icons/icon-bike.svg";
import IconPhone from "../../assets/icons/icon-phone.svg";
import IconGear from "../../assets/icons/icon-gear.svg";
import IconChain from "../../assets/icons/icon-chain.svg";
import CardMountain from "./components/MontainCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Colors from "../../themes/colors";
import Footer from "../../components/footer";
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

  const modelCards = [
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

  const aboutText = [
    {
      icon: IconDiamond,
      alt: "sdc",
      title: "Европейские бренды",
      text: "Представляем десятки   европейских брендов",
    },
    {
      icon: IconSticker,
      alt: "sdc",
      title: "Вечная гарантия",
      text: " некоторые бренды предоставляем пожизненную гарантиюvdefwvr",
    },
    {
      icon: IconSetting,
      alt: "sdc",
      title: "Предпродажная настройка",
      text: "Специалисты настроят ваш велосипед наилучшим образом",
    },
    {
      icon: IconHours,
      alt: "sdc",
      title: "Доставка за 24 часа",
      text: "Доставляем товар всеми популярными транспортными компаниями",
    },
  ];

  const mountainCard = [
    {
      iconTitle: "Рама",
      img: IconBike,
      alt: "bicycleIcon",
      text: "It is a long established fact that a reader will be distracted by the readable content of",
    },
    // {
    //   iconName: "Бортовой компьютер",
    //   icon: IconPhone,
    //   alt: "bicycleIcon",
    //   text: "The point of using lorem ipsum is that it has a more-or-less normal distribution of letters",
    // },
    // {
    //   iconName: "Трансмиссия",
    //   icon: IconGear,
    //   alt: "bicycleIcon",
    //   text: "Many desktop publishing packages and web page editors now use lorem ipsum as ",
    // },
    // {
    //   iconName: "Оборудование",
    //   icon: IconChain,
    //   alt: "bicycleIcon",
    //   text: "Contrary to popular belief, lorem ipsum is not simply random text. It has roots in",
    // },
  ];

  return (
    <div className="home__wrapper">
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
                  <div className="home__pagination">
                    <p></p>
                  </div>
                  <div className="home__pagination">
                    <p></p>
                  </div>
                  <div className="home__pagination">
                    <p></p>
                  </div>
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
          <section className="catalog">
            <Container>
              <div className="catalog__wrapper">
                <h2 className="catalog__title">Каталог</h2>
                <div className="catalog__bicycle-wrapper">
                  <h2 className="catalog__bicycle">Велосипеды</h2>
                  <img src={CatalogBicycle} alt="CatalogBicycle" />
                </div>
                <div className="catalog__bicycle-box">
                  <div className="catalog__bicycle-trade-in">
                    <p className="catalog__bicycle-trade-in-title">Trade-in</p>
                    <img src={CatalogBicycle2} alt="Bicycle" />
                  </div>
                  <div className="catalog__bicycle-spare ">
                    <div className="catalog__bicycle-spare-card">
                      <p className="catalog__bicycle-spare-card-title">
                        Запчасти
                      </p>
                      <img src={CatalogBalloon} alt="CatalogBalloon" />
                    </div>
                    <div className="catalog__bicycle-spare-card2">
                      <img src={CatalogAccessories} alt="CatalogAccessories" />
                      <p className="catalog__bicycle-spare-card-title">
                        Аксессу
                      </p>
                    </div>
                  </div>
                  <div className="catalog__bicycle-equipment">
                    <div className="catalog__bicycle-equipment-card">
                      <p>Экипировка</p>
                      <img src={CatalogScot} alt="CatalogScot" />
                    </div>
                    <div className="catalog__bicycle-equipment-card2">
                      <p>Велостанки</p>
                      <img src={CatalogStands} alt="CatalogStands" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="catalog__motivation-text-wrapper">
                <h3 className="catalog__motivation-title">
                  Ничего не сможет остановить вас
                </h3>
                <p className="catalog__motivation-text">
                  Наша компания специализируется на продаже товаров
                  для велосипедного спорта — велосипедов, запасных частей,
                  аксессуаров и различного спортивного инвентаря для активного
                  спорта и отдыха.
                  <span className="catalog__motivation-link">Подробнее</span>
                </p>
              </div>
            </Container>
          </section>
          <section className="about">
            <img className="img" src={AboutNaturel} alt="about-bicycle" />
            <Container>
              <div className="about__wrapper">
                {aboutText.map((item) => (
                  <AboutText {...item} />
                ))}
              </div>
            </Container>
          </section>
          <section className="models">
            <h2 className="models__title">Лучшие модели для зимней езды</h2>
            <div className="models__wrapper">
              <img className="models__img" src={ModelsImg} alt="modelsImg" />
              <div className="models__card-wrapper">
                {modelCards.map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </div>
          </section>
          <section className="mountain">
            <Container>
              <h2 className="mountain__title">Горные велосипеды</h2>
              <div className="mountain__box-wrapper">
                <div className="mountain__card-wrapper">
                  {mountainCard.map((item) => (
                    <CardMountain {...item} />
                  ))}
                </div>
                <div className="mountain__about">
                  <img src={MountainImg} alt="MountainImg" />

                  <p className="mountain__text">
                    Горный велосипед несмотря на свое название часто и активно
                    используются в условиях города, так как обладает рядом
                    характеристик, позволяющих сделать велопрогулку максимально
                    приятной и комфортной
                  </p>

                  <Button variant={"origin"}> Каталог</Button>
                </div>
              </div>
            </Container>
          </section>
          <Footer />
        </HomeStyle>
      </main>
    </div>
  );
}

export default Home;
