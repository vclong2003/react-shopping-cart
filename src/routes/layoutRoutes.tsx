import React from "react";

import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Review from "../pages/Reviews/Review";

import { IRoute } from "../interfaces";
import { Navigate } from "react-router-dom";

export const layoutRoutes: IRoute[] = [
  {
    path: "/",
    component: <Navigate to={"/products"} />,
  },
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "/products/*",
    component: <Products />,
  },
  {
    path: "/reviews",
    component: <Review />,
  },
  { path: "/checkout", component: <Checkout /> },
];
