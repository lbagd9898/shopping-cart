import { styled, createGlobalStyle } from "styled-components";

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
function Item({ item }) {
  return (
    <>
      <Card>
        <Img src={item.thumbnail}></Img>
        <Food>{item.title}</Food>
      </Card>
    </>
  );
}

export default Item;
