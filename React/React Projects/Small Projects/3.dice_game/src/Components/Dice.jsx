import { useState } from "react";
import { styled } from "styled-components";

const Dice = () => {
  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={() => generateRandomNumber(1, 6)}>
        <img src="../../public/images/dice/dice_1.png" alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default Dice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
