import { useParams } from "react-router-dom";
// import {fetchDataFromApi} from '../Utils/Api';
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchItemTemplate from "./SearchItemTemplate";
import SearchImageItemTemplate from "./SearchImageItemTemplate";
import Pagination from "./Pagination";
import { useContext, useState } from "react";
import { Context } from "../Utils/ContextApi";
import { fetchDataFromApi } from "../Utils/Api";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20"></main>
      <Footer />
    </div>
  );
};

export default SearchResult;
