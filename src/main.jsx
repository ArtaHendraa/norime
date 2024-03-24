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
import ErrorPage from "./pages/error.jsx";
import SearchPage from "./pages/search.jsx";
import GenrePage from "./pages/genre.jsx";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
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
    path: "/bookmark",
    element: (
      <div className="flex items-center justify-center text-2xl font-bold uppercase min-h-96">
        not available fo now
      </div>
    ),
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/genre/:mal_id/:name",
    element: <GenrePage />,
  },
  {
    path: "/anime/:mal_id/:title",
    element: <DetailAnime />,
  },
  {
    path: "series/anime/:mal_id/:title",
    element: <DetailAnime />,
  },
  {
    path: "movie/anime/:mal_id/:title",
    element: <DetailAnime />,
  },
  {
    path: "popular/anime/:mal_id/:title",
    element: <DetailAnime />,
  },
  {
    path: "bookmark/anime/:mal_id/:title",
    element: <DetailAnime />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
