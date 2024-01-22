import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//* Library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//* Library

//* Components
import Navbar from "./components/Fragments/Navbar.jsx";
import Home from "./pages/home.jsx";
import Popular from "./Pages/popular.jsx";
//* Components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
