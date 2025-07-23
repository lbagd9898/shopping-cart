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
  const relevantGroceries = groceries.filter((item) => item.number != 0);
  console.log(relevantGroceries);
  let totalPrice = 0;
  return (
    <>
      {" "}
      <GlobalStyle />
      <Div>
        <H1>Checkout</H1>
        <P>Here is a summary of the items in your cart:</P>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {relevantGroceries.map((item) => {
            const itemPrice = Number((item.price * item.number).toFixed(2));
            totalPrice += itemPrice;
            return (
              <Li>
                {" "}
                {item.number} x {item.grocery} - ${itemPrice}{" "}
              </Li>
            );
          })}
        </ul>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </Div>{" "}
    </>
  );
}

export default CheckOut;
