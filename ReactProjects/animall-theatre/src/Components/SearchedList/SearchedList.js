import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./SearchedList.css";
import axios from "../../axios";
import requests from "../../requests";
import SearchCard from "../SearchCard/SearchCard";

function SearchedList(props) {
  const [{ searchQuery }, dispatch] = useStateValue();

  const [inputValue, setInputValue] = useState("");

  const [movieList, setMovieList] = useState([]);
  const searchedInputValue = props.location.state;


  const searchMovie = () => {
    if (inputValue) {
      dispatch({
        type: "SET_SEARCH_QUERY",
        searchQuery: inputValue,
      });
    }
  };

  const getSearchedList = async () => {
    const request = await axios.get(`${requests.search + searchQuery}`);
    setMovieList(request.data["results"]);
  };

  useEffect(() => {
    getSearchedList();
  }, [searchQuery]);

  useEffect(()=> {
      dispatch({
        type: "SET_SEARCH_QUERY",
        searchQuery: searchedInputValue,
      });
  },[]);

  return (
    <div className="searchedList">
      <div className="search_inputContainer">
        <input
          onKeyPress={(e) => e.key === "Enter" && searchMovie()}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="search"
        ></input>
        <button onClick={searchMovie}>Search</button>
      </div>

      {movieList.map((result) => {
        return <SearchCard key={result.id} data={result} />;
      })}

      {movieList.length === 0 && <p>no data found</p> }
    </div>
  );
}

export default SearchedList;
