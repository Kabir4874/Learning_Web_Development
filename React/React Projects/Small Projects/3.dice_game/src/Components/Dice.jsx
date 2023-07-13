import { styled } from "styled-components";

const Dice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
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
