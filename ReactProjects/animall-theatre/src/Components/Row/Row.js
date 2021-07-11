import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";
import { useHistory } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  

  //a snippet of code which run based on conditions
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const handleClick = (movie) => {
     history.push('/movie', movie);
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

  
    </div>
  );
}

export default Row;
