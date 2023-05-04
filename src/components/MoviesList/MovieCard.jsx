import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./stylesMedia.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="w-[250px] movie_card m-auto mt-3 mb-10 transition-all border-solid border-2 border-zinc-900 p-2 shadow-xl shadow-zinc-600 ease-out duration-300 hover:scale-105">
        <img className="w-[100%]" src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
