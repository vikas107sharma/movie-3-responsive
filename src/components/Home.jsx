import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "./MoviesList/MoviesListing";
import Header from "./Header";
import Form from "./Form";
import { fetchAsyncMovies, fetchAsyncSeries } from "./redux/MovieSlice";
import TopCarousel from "./MoviesList/TopCarousel";

const Home = () => {
  return (
    <>
    <div>
    <TopCarousel/>
      <div className="bg-zinc-900">
        <div className="m-auto w-[85%] md:w-[90%] lg:w-[95%] bg-zinc-800 rounded-2xl flex-col flex">
          <div className="text-white mt-10">
            <div className="flex justify-between items-center m-4">
              <h1 className="inline-block text-3xl font-bold">Movies</h1>
              <Link to="/movies">view all</Link>
            </div>
            <MovieListing ListName={"movies"} />
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center m-4">
              <h1 className="inline-block text-3xl font-bold">TV shows</h1>
              <Link to="/series">view all</Link>
            </div>
            <MovieListing ListName={"series"} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
