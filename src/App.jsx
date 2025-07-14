import { Link } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import logoImg from "./assets/price-chopper-logo.png";
import pointer from "./assets/pointer.svg";

function App() {
  const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)};
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: whitesmoke;
    padding: 1rem;
    border: 3px solid var(--green-color);
    box-shadow: 10px 10px 10px lightgray;
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

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: red;
    font-size: 1.5rem;
    font-style: italic;
  `;

  const LinkDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `;

  const PointSvg = styled.img`
    width: 2rem;
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Welcome to Price Chopper</Header>
        <Text1>Let's fill your cart!</Text1>
        <Logo src={logoImg} alt="Price Chopper Logo"></Logo>
        <Text2>All of your current cravings await...</Text2>
        <LinkDiv>
          <PointSvg src={pointer}></PointSvg>
          <StyledLink to="shop">Shop Page</StyledLink>
        </LinkDiv>
      </Container>
    </>
  );
}

export default App;
