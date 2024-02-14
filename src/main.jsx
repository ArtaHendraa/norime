import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import PopularPage from "./pages/popular.jsx";
import Navbar from "./components/Fragments/Navbar.jsx";
import SeriesPage from "./pages/series.jsx";
import MoviePage from "./pages/movie.jsx";
import DetailAnime from "./pages/detailAnime.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },
  {
    path: "/popular",
    element: <PopularPage />,
  },
  {
    path: "/anime/:mal_id",
    element: <DetailAnime />,
  },
  {
    path: "series/anime/:mal_id",
    element: <DetailAnime />,
  },
  {
    path: "movie/anime/:mal_id",
    element: <DetailAnime />,
  },
  {
    path: "popular/anime/:mal_id",
    element: <DetailAnime />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
