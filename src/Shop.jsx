import { styled, createGlobalStyle } from "styled-components";
import shoppingCart from "./assets/shopping-cart.svg";
import Item from "./Item.jsx";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

const ExtraDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border: 1px solid red;
`;

const Button = styled.button`
  color: var(--green-color);
  background-color: white;
  border: 2px solid var(--green-color);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 10px 10px 10px lightgray;
`;

function Shop() {
  const navigate = useNavigate();

  const [groceries, setGroceries] = useState([]);

  const [groceriesInCart, setGroceriesInCart] = useState([]);

  const [emptyGroceries, setEmptyGroceries] = useState([]);

  let entireGroceries = useRef([]);

  function modifyCart(grocery, number) {
    console.log(grocery);
    console.log(number);
    setGroceriesInCart((prev) => ({ ...prev, [grocery]: number }));
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => response.json())
      .then((data) => {
        entireGroceries.current = data.products;
        setGroceries(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (search, e) => {
    e.preventDefault();
    const filteredGroceries = entireGroceries.current.filter((grocery) =>
      grocery.title.toLowerCase().includes(search.toLowerCase())
    );
    setGroceries(filteredGroceries);
    if (filteredGroceries.length == 0) {
      setEmptyGroceries(["No items match your search."]);
    } else {
      setEmptyGroceries([]);
    }
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
        {emptyGroceries.map((item, index) => (
          <ExtraDiv key={index}>{item}</ExtraDiv>
        ))}
        <Grid>
          {groceries.map((item) => (
            <Item key={item.id} modify={modifyCart} item={item} />
          ))}
        </Grid>
        <Button
          onClick={() => navigate("/checkout", { state: groceriesInCart })}
        >
          Checkout
        </Button>
      </Container>
    </>
  );
}

export default Shop;
