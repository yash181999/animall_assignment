import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import requests from "../../requests";
import { useStateValue } from "../../StateProvider";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [{ searchQuery }, dispatch] = useStateValue();
  const history = useHistory();
  

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchDiscover);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const searchMovie = () => {
    if (searchInputValue ) {
      dispatch({
        type: "SET_SEARCH_QUERY",
        searchQuery: searchInputValue,
      });
      history.push("/search", searchInputValue)
    }
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <div className="searchbar">
          <input
            onKeyPress={(e) => e.key ==='Enter' && searchMovie()}
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            placeholder="search"
          ></input>
          <button onClick={searchMovie}>Search</button>
        </div>
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
