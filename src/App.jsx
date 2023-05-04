import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";
import MoviePage from "./components/MoviesList/MoviePage";
import SeriesPage from "./components/MoviesList/SeriesPage";
import SingleMoviepage from "./components/MoviesList/SingleMoviepage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="flex w-[100%] min-h-full flex-col">
      <div className="w-[100%] m-auto">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" exact element={<MoviePage />} />
          <Route path="/series" exact element={<SeriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/movie/:imdbID" element={<SingleMoviepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
