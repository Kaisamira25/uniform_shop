import React from "react";
import Home from "../pages/contents/home/home";
import Login from "../pages/contents/login/login";
import Register from "../pages/contents/register/register";
import Product from "../pages/contents/product/Product";
import ProductAdmin from "../pages/contents/admin/ProductAdmin";
import OrderAdmin from "../pages/contents/admin/OrderAdmin";
import UserAdmin from "../pages/contents/admin/UserAdmin";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/product", element: <Product /> },
  { path: "/admin", element: <ProductAdmin /> },
  { path: "/admin/product", element: <ProductAdmin /> },
  { path: "/admin/order", element: <OrderAdmin /> },
  { path: "/admin/user", element: <UserAdmin /> },
  { path: "/*", element: <Home /> },
];

export default routes;
