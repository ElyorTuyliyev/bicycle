import FooterStyle from "./Footer.style";
import Container from "../../container/index";
import FooterBc from "../../assets/images/footer-bc-img.png";
import Button from "../Button";
import FooterLogo from "../../assets/icons/logo.svg";

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
                <h2>Каталог</h2>
                {catalog.map((item) => (
                  <>
                    <li key={item}>{item.name}</li>
                  </>
                ))}
              </ul>
              <ul className="footer__client-wrapper">
                <h2>Каталог</h2>
                {catalog.map((item) => (
                  <>
                    <li key={item}>{item.name}</li>
                  </>
                ))}
              </ul>
              <ul className="footer__contact-wrapper">
                <h2>Каталог</h2>
                {catalog.map((item) => (
                  <>
                    <li key={item}>{item.name}</li>
                  </>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
