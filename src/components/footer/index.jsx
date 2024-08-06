import FooterStyle from "./Footer.style";
import Container from "../../container/index";
import FooterBc from "../../assets/images/footer-bc-img.png";
import Button from "../Button";
import FooterLogo from "../../assets/icons/logo.svg";
import phoneIcon from "../../assets/icons/smartphone.svg";
import navigationIcon from "../../assets/icons/navigation.svg";
import mailIcon from "../../assets/icons/mail.svg";

const Footer = ({ withForm }) => {
  const catalog = [
    {
      name: "Велосипеды-in",
    },
    {
      name: "Экипировка",
    },
    {
      name: "Запчасти",
    },
    {
      name: "Велостанки",
    },
    {
      name: "Аксессуары",
    },
  ];
  const client = [
    {
      name: "О нас",
    },
    {
      name: "Доставка и оплата",
    },
    {
      name: "Блог",
    },
    {
      name: "Контакты",
    },
    {
      name: "Веломастерская",
    },
    {
      name: "Хранение",
    },
    {
      name: "Гарантии",
    },
  ];
  console.log(catalog[0].name);

  return (
    <FooterStyle>
      <footer className="footer">
        <section className="subscribe">
          <Container>
            <div className="subscribe__wrapper">
              <div className="subscribe__login-wrapper">
                <h2 className="subscribe__title">
                  Подпишитесь на наши новости
                </h2>
                <div className="subscribe__inp-wrapper">
                  <input type="email" placeholder="E-mail" />
                  <Button variant={"orange"}>Подписаться</Button>
                </div>
                <div className="subscribe__check-wrapper">
                  <input type="checkbox" />
                  <p className="subscribe__text">
                    Согласен(на) на обработку персональных данных
                  </p>
                </div>
              </div>
              <div className="subscribe__bc-img-wrapper">
                {/* this is img   */}
              </div>
            </div>
          </Container>
        </section>
        <section className="footer__intro">
          <Container>
            <div className="footer__wrapper">
              <div className="footer__list-wrapper">
                <img src={FooterLogo} alt="logo" />
                <p className="footer__text">
                  Компания World-bikes специализируется на продаже товаров для
                  велосипедного спорта.
                </p>
              </div>
              <ul className="footer__catalog-wrapper">
                <h2 className="footer__link-title">Каталог</h2>
                {catalog.map((item) => (
                  <>
                    <li className="footer__list-link" key={item}>
                      {item.name}
                    </li>
                  </>
                ))}
              </ul>
              <ul className="footer__client-wrapper">
                <h2 className="footer__link-title">Для клиента</h2>
                {client.map((item) => (
                  <>
                    <li className="footer__list-link" key={item}>
                      {item.name}
                    </li>
                  </>
                ))}
              </ul>
              <ul className="footer__contact-wrapper">
                <h2 className="footer__link-title">Контакты</h2>
                <div className="footer__contact-number-wrapper">
                  <img src={phoneIcon} alt="phone-icon" />
                  <div className="footer__phone-wrapper">
                    <p className="footer-phone">+7(495)055-75-86</p>
                    <p className="footer-phone">+7(965)142-22-99</p>
                  </div>
                </div>
                <div className="footer__contact-number-wrapper">
                  <img src={navigationIcon} alt="phone-icon" />
                  <div className="footer__phone-wrapper">
                    <p className="footer-phone">г. Москва, ул. </p>
                    <p className="footer-phone">Доватора, 7/8 с1</p>
                  </div>
                </div>
                <div className="footer__contact-number-wrapper">
                  <img src={mailIcon} alt="phone-icon" />
                  <div className="footer__phone-wrapper">
                    <p className="footer-phone">
                      <p className="footer-phone">order@world-bike.ru</p>
                    </p>
                  </div>
                </div>
              </ul>
            </div>
            <p className="footer__world-bike">
              © 2023 world bike <span>Пользовательское соглашение</span>
            </p>
          </Container>
        </section>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
