import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import axios from "../../axios";
import requests from "../../requests";
import "./MovieDetails.css";

function MovieDetails(props) {
  const movieData = props.location.state;
  const {
    original_title,
    overview,
    vote_average,
    poster_path,
    release_date,
    backdrop_path,
    first_air_date,
    original_name
    
  } = movieData;

  const [castList, setCastList] = useState([]);

  const getCast = async () => {
    const result = await axios.get(`movie/${movieData.id}/${requests.cast}`);
    setCastList(result.data["cast"]);
  };

  useEffect(() => {
    getCast();
  }, []);

  return (
    <div className="movie_details">
      
      <div
        className="main_card"
        
      >
        <img
          src={`https://www.themoviedb.org/t/p/w188_and_h282_bestv2${poster_path}`}
        />
        <div className="movie_details">
          <div className="title_rating">
            <h2>{original_title || original_name}</h2>
            <ReactStars value={vote_average} count={10} activeColor="#f5c842" />
          </div>
          <p>{release_date || first_air_date}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
      </div>

      <section className="cast_container">
        <h1>Cast</h1>
        <div className="cast_list">
          {castList.map((result) => {
            const profilePath = result.profile_path
              ? `https://www.themoviedb.org/t/p/w276_and_h350_face${result.profile_path} `
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
            return (
              <div key={result.cast_id} className="cast_card">
                <img src={profilePath}></img>
                <div class="cast_details">
                  <h4>
                    <b>{result.name}</b>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;
