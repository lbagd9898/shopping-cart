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
  box-shadow: 5px 5px 5px lightgray;
`;

const H1 = styled.h1`
  color: black;
`;

const P = styled.p`
  color: red;
  font-weight: 600;
  font-size: 1.2rem;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
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
        <P>Here is a summary of the items in your cart:</P>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {Object.entries(relevantGroceries).map(([grocery, quantity]) => (
            <Li>
              {" "}
              {grocery} - {quantity}{" "}
            </Li>
          ))}
        </ul>
      </Div>{" "}
    </>
  );
}

export default CheckOut;
