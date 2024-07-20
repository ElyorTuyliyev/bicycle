import Button from "../../components/Button";
import Header from "../../components/Header";
import Container from "../../container";
import HomeStyle from "./Home.style";

function Home() {
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

                <div className="home__"></div>
              </div>
            </section>
          </Container>
        </HomeStyle>
      </main>
    </>
  );
}

export default Home;
