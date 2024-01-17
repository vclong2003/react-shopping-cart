import React from "react";
import { IRoute } from "../interfaces";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Review from "../pages/Reviews/Review";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";

export const layoutRoutes: IRoute[] = [
  {
    path: "/",
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
  { path: "/buh", component: <LoadingAnimation /> },
];
