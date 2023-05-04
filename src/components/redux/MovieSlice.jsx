import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=b9e88753&s=${term || "dark"}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (term) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=b9e88753&s=${term || "game"}&type=series`
    );
    return response.data;
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "movies/fetchSingleMovie",
  async (imdbID) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=b9e88753&i=${imdbID}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  singleMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSingleMovie: (state)=>{
      state.singleMovie = {};
    }
  },
  extraReducers: {
    //fetch movies
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },

    // fetch series
    [fetchAsyncSeries.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, series: payload};
    },
    [fetchAsyncSeries.rejected]: () => {
      console.log("rejected");
    },

    // fetch single movie
    [fetchSingleMovie.pending]: () => {
      console.log("Pending");
    },
    [fetchSingleMovie.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, singleMovie: payload};
    },
    [fetchSingleMovie.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { removeSingleMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSingleMovie = (state) => state.movies.singleMovie;
export default movieSlice.reducer;
