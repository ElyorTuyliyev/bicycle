import Header from "../../components/Header";
import Container from "../../container";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Container>
          <div className="home__wrapper"></div>
        </Container>
      </main>
    </>
  );
}

export default Home;
