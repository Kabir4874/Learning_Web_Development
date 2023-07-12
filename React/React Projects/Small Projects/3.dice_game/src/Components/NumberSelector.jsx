import { useState } from "react";
import { styled } from "styled-components";

const NumberSelector = () => {
  const array = [1, 2, 3, 4, 5, 6];

  const [selected, setSelected] = useState();
    
  return (
    <NumberSelectorContainer>
      <div className="flex">
      {array.map((value, i) => (
        <Box
        isSelected= {value===selected}
         key={i} onClick={() => setSelected(value)}>
          {value}
        </Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
    text-align: right;
}

`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  background-color: ${(prop)=> prop.isSelected? "black": "white"};
  color: ${(prop)=> prop.isSelected? "white": "black"};
`;
