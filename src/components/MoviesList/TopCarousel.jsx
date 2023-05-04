import React from "react";
import { getAllMovies, getAllSeries } from "../redux/MovieSlice";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Axios } from "axios";
import "./stylesMedia.css";

const TopCarousel = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies?.Search.map((movie, index) => {
        console.log(movie)
        return (
          <>
            <div className="w-full flex items-center justify-center top_carousel relative movie_gradient h-[75vh]">
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  zIndex: "-1",
                  height: "100vh",
                  top: "-140px",
                }}
              >
                <img
                  className="movie_img "
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </div>
              <div className="flex flex-col w-[90%]">
                <p className="text-white text-4xl font-bold">{movie.Title}</p>
                <p className="text-white pt-4">({movie.Year})</p>
              </div>
            </div>
          </>
        );
      })
    ) : (
      <div className="movies_error">
        <h3>{movies.Error}</h3>
      </div>
    );

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="gradient">
        <Slider {...settings}>{renderMovies}</Slider>
      </div>
    </>
  );
};

export default TopCarousel;
