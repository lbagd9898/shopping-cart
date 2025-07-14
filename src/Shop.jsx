import { styled, createGlobalStyle } from "styled-components";
import shoppingCart from "./assets/shopping-cart.svg";
import Item from "./Item.jsx";
import { useState, useEffect, useRef } from "react";
import Input from "./Input.jsx";

const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 1rem;
  border: 3px solid var(--green-color);
  gap: 1rem;
  box-shadow: 10px 10px 10px lightgray;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
`;

const Header = styled.h1`
  margin: 0px;
`;

const ShoppingImg = styled.img`
  width: 35px;
`;

function Shop() {
  const [groceries, setGroceries] = useState([]);

  let entireGroceries = useRef([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => response.json())
      .then((data) => {
        entireGroceries.current = data.products;
        setGroceries(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (search) => {
    const filteredGroceries = entireGroceries.current.filter((grocery) =>
      grocery.title.toLowerCase().includes(search.toLowerCase())
    );
    setGroceries(filteredGroceries);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <CartDiv>
          <Header>Shopping Cart</Header>
          <ShoppingImg src={shoppingCart}></ShoppingImg>
        </CartDiv>
        <Input handleClick={handleClick} />
        <Grid>
          {groceries.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
