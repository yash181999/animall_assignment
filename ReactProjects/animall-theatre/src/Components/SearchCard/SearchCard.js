import React from "react";
import { useHistory } from "react-router-dom";

function SearchCard({ data }) {
  const {
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    backdrop_path,
  } = data;

  const history = useHistory();

  const goToDetails = () => {
    history.push('/movie', data);
  }


  return (
    <div className="card" onClick={goToDetails}>
      <img
        src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2${poster_path}`}
      ></img>
      <div className="movie_details">
        <h3>{original_title}</h3>
        <p className="release_date">{release_date}</p>
        <p className="movie_description">
          {overview.length > 400
            ? overview.substring(0, overview.length / 2)
            : overview}
        </p>
      </div>
    </div>
  );
}

export default SearchCard;
