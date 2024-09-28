import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setSearch("");
    setSearchData([]);
    setSelectedItem(-1);
  };
  const handleKeydown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        window.open(searchData[selectedItem].show.url);
      }
    } else {
      setSelectedItem(-1);
    }
  };
  useEffect(() => {
    if (search !== "") {
      fetch(`http://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }
  }, [search]);
  return (
    <section className="search_section">
      <div className="search_input_div">
        <input
          type="text"
          className="search_input"
          placeholder="Search..."
          autoComplete="off"
          onChange={handleChange}
          value={search}
          onKeyDown={handleKeydown}
        />
        <div className="search_icon">
          {!search ? <SearchIcon /> : <CloseIcon onClick={handleClose} />}
        </div>
      </div>
      <div className="search_result">
        {searchData.map((data, index) => (
          <a
            key={index}
            href="#"
            target="_blank"
            className={
              selectedItem === index
                ? "search_suggestion_line active"
                : "search_suggestion_line"
            }
          >
            {data.show.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
