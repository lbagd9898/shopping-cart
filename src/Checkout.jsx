import { styled, createGlobalStyle } from "styled-components";
import { useLocation } from "react-router-dom";

const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)}`;

const Div = styled.div`
  background-color: white;
  padding: 0px 1rem;
  border: 2px solid var(--green-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: black;
`;

function CheckOut() {
  const location = useLocation();
  const groceries = location.state;
  const relevantGroceries = Object.fromEntries(
    Object.entries(groceries).filter(([key, value]) => value != 0)
  );
  console.log(relevantGroceries);
  return (
    <>
      {" "}
      <GlobalStyle />
      <Div>
        <H1>Checkout</H1>
        <ul>
          {Object.entries(relevantGroceries).map(([grocery, quantity]) => (
            <li>
              {" "}
              {grocery}: {quantity}{" "}
            </li>
          ))}
        </ul>
      </Div>{" "}
    </>
  );
}

export default CheckOut;
