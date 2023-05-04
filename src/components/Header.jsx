import { Link } from "react-router-dom";
import "./styles/header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Form from "./Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "./redux/MovieSlice";

const Header = () => {
  const [q, setQ] = useState();
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
  }, [dispatch, term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(q);
    if (q.length > 0) {
      setTerm(q);
      const winsize = window.innerWidth;
      if (winsize > 430) {
        window.scrollBy({
          top: window.innerHeight*(50/100),
          behavior: "smooth",
        });
      } else {
        window.scrollBy({
          top: window.innerHeight * (30 / 100),
          behavior: "smooth",
        });
      }
    }
  };

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="lg:flex md:flex sm:flex hidden justify-center">
        <div className="flex h-[80px] w-[90%] absolute z-10 items-center m-auto header">
          <div className="flex relative justify-center items-center">
            {open ? (
              <AiOutlineClose
                className="mr-4 text-3xl"
                onClick={() => {
                  toggle();
                }}
              />
            ) : (
              <RxHamburgerMenu
                className="mr-4 text-3xl"
                onClick={() => {
                  toggle();
                }}
              />
            )}

            <div
              className="absolute menu_bar bg-red-500 top-[70px] overflow-hidden -left-1"
              style={{
                height: open ? "40vh" : "0",
              }}
            >
              <div className=" h-[100%] bg-zinc-900 flex p-7 w-[150px] flex-col text-lg gap-5">
                <Link to="/">
                  <h1 className="header_link">Home</h1>
                </Link>
                <Link to="/movies">
                  <h1 className="header_link">Movies</h1>
                </Link>
                <Link to="/series">
                  <h1 className="header_link">Shows</h1>
                </Link>
              </div>
            </div>

            <Link to="/">
              <h1 className="inline-block text-white logo mr-5">Moviepedia</h1>
            </Link>
          </div>
          <div className="flex gap-5 w-full">
            <Form q={q} setQ={setQ} handleSubmit={handleSubmit} />
            <Link
              to="/login"
              class="bg-red-600 flex justify-center items-center gap-1 ml-auto text-sm Buttons hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-600 rounded-lg"
            >
              Signin <AiOutlineArrowRight className="pt-[2px] text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden sm:hidden flex justify-center">
        <div className="flex h-[80px] w-[90%] absolute z-10 items-center m-auto header">
          <div className="flex relative justify-center items-center">
            {open ? (
              <AiOutlineClose
                className="mr-4 text-3xl"
                onClick={() => {
                  toggle();
                }}
              />
            ) : (
              <RxHamburgerMenu
                className="mr-4 text-3xl"
                onClick={() => {
                  toggle();
                }}
              />
            )}

            <div
              className="absolute menu_bar bg-red-500 top-[70px] overflow-hidden -left-1"
              style={{
                height: open ? "40vh" : "0",
              }}
            >
              <div className="h-[100%] bg-zinc-900 flex p-5 flex-col text-lg gap-3">
                <Link to="/">
                  <h1 className="header_link">Home</h1>
                </Link>
                <Link to="/movies">
                  <h1 className="header_link">Movies</h1>
                </Link>
                <Link to="/series">
                  <h1 className="header_link">Shows</h1>
                </Link>
                <Link
                to="/login"
                class="bg-red-600 flex justify-center items-center gap-1 ml-auto text-sm Buttons hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-600 rounded-lg"
              >
                Signin <AiOutlineArrowRight className="pt-[2px] text-lg" />
              </Link>
              </div>
            </div>

            
            <Link to="/">
              <h1 className="inline-block text-white logo mr-5">Moviepedia</h1>
            </Link>
          </div>
          <div className="flex gap-5 w-full">
            <Form q={q} setQ={setQ} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
