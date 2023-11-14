import React from "react";
import Home from "../pages/contents/home/home";
import Login from "../pages/contents/login/login";
import Register from "../pages/contents/register/register";
import Product from "../pages/contents/product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/product", element: <Product /> },
  { path: "/*", element: <Home /> },
];

export default routes;
