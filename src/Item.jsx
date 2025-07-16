import { styled, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)};
`;
const Card = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  aspect-ratio: 1 / 1;
`;

const Food = styled.h2`
  margin: 0px;
  font-size: 1rem;
`;

const Img = styled.img`
  width: 50px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background-color: var(--green-color);
  border: 1px solid gray;
  border-radius: 50px;
  width: 25px;
  aspect-ratio: 1 / 1;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
function Item({ item, modify }) {
  const [counter, setCounter] = useState(0);

  function addGrocery() {
    setCounter((prev) => prev + 1);
  }

  function removeGrocery() {
    setCounter((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  }

  useEffect(() => {
    modify(item.title, counter);
  }, [counter]);

  return (
    <>
      <Card>
        <Img src={item.thumbnail}></Img>
        <Food>{item.title}</Food>
        <ButtonDiv>
          <Button onClick={() => addGrocery()}>+</Button>
          <strong> {counter} </strong>
          <Button onClick={() => removeGrocery()}>-</Button>
        </ButtonDiv>
      </Card>
    </>
  );
}

export default Item;
