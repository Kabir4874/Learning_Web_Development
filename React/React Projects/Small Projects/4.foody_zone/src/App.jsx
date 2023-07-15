import { styled } from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <FoodCardContainer>
        <FoodCard>
          food 
        </FoodCard>
        </FoodCardContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 10px;
    }
  }
`;

const FilterContainer= styled.section`
display: flex;
justify-content: center;
gap: 12px;

`

const Button= styled.button`
background-color: #ff4343;
border-radius: 5px;
padding: 6px 12px;
border: none;
cursor: pointer;
color: white;
`

const FoodCardContainer = styled.section`

background-image: url("/images/bg.png");
background-size: cover;
background-position: center center;

`

const FoodCard= styled.div`

`