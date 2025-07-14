import { Link } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import logoImg from "./assets/price-chopper-logo.png";

function App() {
  const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)}`;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;

    > * {
      margin: 0px;
    }
  `;

  const Header = styled.h1`
    color: red;
    font-weight: 700;
    font-size: 3rem;
  `;

  const Text1 = styled.p`
    font-size: 2rem;
    font-weight: 600;
  `;

  const Text2 = styled.i`
    font-size: 1.5rem;
  `;

  const Logo = styled.img`
    width: 10rem;
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Welcome to Price Chopper</Header>
        <Text1>Let's fill your cart!</Text1>
        <Logo src={logoImg} alt="Price Chopper Logo"></Logo>
        <Text2>All of your current cravings await...</Text2>
        <Link to="shop">Shop Page</Link>
      </Container>
    </>
  );
}

export default App;
