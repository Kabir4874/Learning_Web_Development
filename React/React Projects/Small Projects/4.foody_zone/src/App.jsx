import { styled } from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLoading(false);
        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food"
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filterFood("all")}>All</Button>
          <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
}

export default App;

export const Container = styled.main`
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

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  color: white;
`;
