import { styled } from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="../../public/images/dices.png" alt="" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  text-align: right;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  padding: 15px 18px;
  min-width: 220px;
  background-color: black;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.4s ease;
  &:hover {
    background-color: transparent;
    color: black;
    outline: 1px solid black;
  }
`;
