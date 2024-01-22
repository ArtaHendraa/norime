import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//* Library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//* Library

//* Components
import HomePage from "./pages/home.jsx";
import PopularPage from "./Pages/popular.jsx";
import Navbar from "./components/Fragments/Navbar.jsx";
//* Components

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
