import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import Dice from "./Dice"


const Gameplay = () => {
  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore/>
       <NumberSelector/>
      </div>
      <Dice/>
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.div`

.top_section{
    display: flex;
    align-items: end;
    justify-content: space-between;
}

`