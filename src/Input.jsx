import { styled, createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`:root { --green-color: rgb(123, 186, 47)};
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const InputBar = styled.input`
  color: black;
  width: 500px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px lightgray;
`;

const Button = styled.button`
  color: white;
  background-color: var(--green-color);
  padding: 0.4rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 5px 5px 5px lightgray;
`;

function Input({ handleClick }) {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <InputDiv>
        <InputBar
          type="text"
          onChange={handleChange}
          placeholder="Search items here..."
          value={inputVal}
        />
        <Button onClick={() => handleClick(inputVal)}> Search </Button>
      </InputDiv>
    </>
  );
}

export default Input;
