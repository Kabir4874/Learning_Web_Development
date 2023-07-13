import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import Dice from "./Dice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError]= useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selected){
      setError("You have not selected any number")
      return
    }
   
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);
    if(selected=== randomNumber){
      setScore((prev)=> prev+randomNumber)
    }
    else{
      setScore((prev)=> prev-2);
    }

    setSelected(undefined)
  };

  const resetScore= ()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selected={selected} setSelected={setSelected} />
      </div>
      <Dice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button>Show Rules</Button>
      </div>
      <Rules/>
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 220px;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
  }
`;
