import Container from "../../container";
import Logo from "../../assets/icons/logo.svg";
import HeaderStyle from "./Header.style";

function Header() {
  return (
    <Container>
      <HeaderStyle>
        <img src={Logo} alt="logo" />
      </HeaderStyle>
    </Container>
  );
}

export default Header;
