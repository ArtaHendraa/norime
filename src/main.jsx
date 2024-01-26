import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import PopularPage from "./pages/popular.jsx";
import Navbar from "./components/Fragments/Navbar.jsx";
import SeriesPage from "./pages/series.jsx";
import MoviePage from "./pages/movie.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
