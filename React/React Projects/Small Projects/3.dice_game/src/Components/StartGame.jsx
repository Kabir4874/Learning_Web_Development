import { styled } from "styled-components";

const StartGame = () => {
  return (                                                                            
    <Container>
      <img src="../../public/images/dices.png" alt="" />
      <div>
        <h1>DICE GAME</h1>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: auto;
`; 
