import React from "react";

const SingleMoviePageCard = ({ movie }) => {
  console.log("Movie", movie);
  const genre = movie.Genre.split(",");
  const language = movie.Language.split(",");
  const casts = movie.Actors.split(",");
  const URL = movie.Poster;
  console.log(URL);
  return (
    <div className="relative">
      <div
        style={{
          overflow: "hidden",
          position: "fixed",
          width: "100vw",
          zIndex: "-1",
          height: "100vh",
        }}
      >
        <img className="movie_img" src={URL} alt="" />
      </div>

      <div
        className={`flex flex-wrap movie_gradient pt-[120px] pb-20 justify-center items-center text-white`}
      >
        <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center items-center">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-[300px] max-w-[90%] rounded-2xl"
          />
        </div>
        <div className=" flex lg:w-[40%] md:w-[50%] sm:w-[100%] justify-center pt-5 items-center">
          <div className="w-[70%] justify-center items-center">
            <h1 className="text-3xl">
              {movie.Title} <span className="text-sm">({movie.Year})</span>
            </h1>
            <div className="flex mt-5 flex-wrap">
              {genre.map((g) => {
                return (
                  <span className="p-1 pl-2 pr-2 mr-2 mt-2 rounded-full border-2 ">
                    {g}
                  </span>
                );
              })}
            </div>
            <div className="flex mt-5 flex-wrap">
              <h3 className="mr-3">Language : </h3>
              {language.map((g) => {
                return <span className="mr-1">{g}</span>;
              })}
            </div>
            <div className="mt-5">
              <h3>Description </h3>
              <p>{movie.Plot}</p>
            </div>
            <div className="mt-5">
              <h3>Casts</h3>
              {casts.map((c) => {
                return <span>{c},</span>;
              })}
              <span> and more...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePageCard;
